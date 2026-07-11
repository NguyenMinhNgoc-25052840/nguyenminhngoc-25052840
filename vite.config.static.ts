/**
 * Static SPA build for GitHub Pages.
 * Usage: bun run build:static
 * Output: dist/  (deploy this folder to GitHub Pages)
 */
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import fs from "node:fs/promises";

// GitHub Pages base path — repo name for user/organization pages under a repo.
const BASE = "/NguyenMinhNgoc25052840/";
// Origin that currently serves the Lovable-hosted assets (project preview).
const LOVABLE_ORIGIN =
  "https://id-preview--4e0125a8-3138-4b72-a386-b7b856154f27.lovable.app";

/**
 * Transforms `*.asset.json` imports so their `url` field points to a locally
 * mirrored copy under public/l5e/<asset_id>/<filename>. Downloads the file
 * from the Lovable CDN at build time if not already present.
 */
function assetPointerMirror(): Plugin {
  const publicRoot = path.resolve("public");
  return {
    name: "asset-pointer-mirror",
    enforce: "pre",
    async load(id) {
      if (!id.endsWith(".asset.json")) return null;
      const raw = JSON.parse(await fs.readFile(id, "utf-8"));
      if (!raw?.url || !raw?.asset_id || !raw?.original_filename) return null;

      const relDir = path.join("l5e", raw.asset_id);
      const outDir = path.join(publicRoot, relDir);
      const outFile = path.join(outDir, raw.original_filename);

      let exists = true;
      try {
        await fs.access(outFile);
      } catch {
        exists = false;
      }
      if (!exists) {
        const src = raw.url.startsWith("http") ? raw.url : LOVABLE_ORIGIN + raw.url;
        // eslint-disable-next-line no-console
        console.log(`[asset-mirror] fetching ${src}`);
        const res = await fetch(src);
        if (!res.ok) {
          throw new Error(`[asset-mirror] failed to fetch ${src}: ${res.status}`);
        }
        await fs.mkdir(outDir, { recursive: true });
        const buf = Buffer.from(await res.arrayBuffer());
        await fs.writeFile(outFile, buf);
      }

      const newUrl = `${BASE}${relDir.split(path.sep).join("/")}/${raw.original_filename}`;
      return `export default ${JSON.stringify({ ...raw, url: newUrl })};`;
    },
  };
}

export default defineConfig({
  base: BASE,
  plugins: [assetPointerMirror(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "static-index.html"),
    },
  },
});
