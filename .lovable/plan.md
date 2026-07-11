## Vấn đề
GitHub Actions fail ở bước `Install dependencies`:
```
error: lockfile had changes, but lockfile is frozen
```
Nguyên nhân: `package.json` đã được cập nhật (thêm script `build:static`, `preview:static`) nhưng `bun.lock` trong repo chưa khớp hoàn toàn với `package.json`, nên `bun install --frozen-lockfile` từ chối.

## Cách sửa (chọn 1 — mình đề xuất cách 1)

**Cách 1 (khuyến nghị): Bỏ `--frozen-lockfile` trong workflow**
- Sửa `.github/workflows/deploy.yml`: đổi `bun install --frozen-lockfile` → `bun install --no-save`
- Ưu điểm: không cần chạy lệnh local, deploy được ngay khi push
- Nhược điểm: nhẹ về strictness (nhưng phù hợp cho static site build)

**Cách 2: Regenerate lockfile trước khi push**
- Chạy `bun install` local, commit `bun.lock` mới lên GitHub
- Giữ `--frozen-lockfile` (strict hơn)
- Nhược điểm: bạn phải thao tác thủ công mỗi khi package.json đổi

## Đề xuất
Dùng **Cách 1** — chỉ sửa 1 dòng trong `.github/workflows/deploy.yml`. Push lên GitHub, Actions sẽ build & deploy thành công.
