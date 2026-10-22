# Copilot Overview Workshop - bản general

Site lab Microsoft 365 Copilot dùng chung cho mọi phòng ban và mọi vai trò, dựng theo mẫu `m365copilot-overview-lab-mkg`
(cùng cấu trúc module/lab, giao diện và cách host), nhưng nội dung và file demo dùng một công ty dịch vụ giả định thay vì một phòng ban cố định.

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `public/` | Site tĩnh: `index.html`, `js/app.js` (danh sách module và file demo), `css/style.css`, `labs/*/index.md`, `files/` |
| `demo-files/` | Bản gốc các file demo và script tạo lại (`_gen/`), kèm đáp án cho người hướng dẫn |
| `wrangler.jsonc` | Cấu hình Cloudflare Workers (static assets từ `public/`) |

## Chạy thử và deploy lên Cloudflare Workers

```bash
npx wrangler dev        # chạy thử tại http://localhost:8787
npx wrangler deploy     # deploy, Worker tên m365copilot-general-lab
```

Lần đầu deploy, wrangler sẽ yêu cầu đăng nhập Cloudflare (`npx wrangler login`).
Không mở trực tiếp `index.html` bằng file:// vì trang tải nội dung lab bằng fetch; hãy chạy qua wrangler dev hoặc một web server bất kỳ.

## Sửa nội dung

- Thêm hoặc đổi lab: sửa file markdown trong `public/labs/`, cập nhật `modules` trong `public/js/app.js` và bảng lịch trình trong `public/index.html`.
- Đổi file demo: xem `demo-files/README.md`. Trong markdown, `[tên file](#file-<id>)` tự thành link tải file có id tương ứng trong `demoFiles` của `app.js`.
