import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route as IndexRoute } from "./routes/index";
import "./styles.css";

const IndexComponent = IndexRoute.options.component!;
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <IndexComponent />
    </QueryClientProvider>
  </StrictMode>,
);
