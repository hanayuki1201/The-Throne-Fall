# 👑 THE THRONE FALL — Dưới Ngai Tàn | Độc Dược Ngọt Ngào 🍷

> *"Khi vương quyền sụp đổ, kẻ sống sót không phải kẻ mạnh nhất, mà là kẻ hiểu rõ vị đắng của độc dược hoàng gia."*

Một giao diện web tương tác (Interactive Visual Novel / Chatbot Roleplay Landing Page) dành riêng cho dự án chatbot AI Roleplay **THE THRONE FALL**. Trang web được thiết kế theo phong cách Dark Gothic Fantasy sang trọng, huyền bí với các hiệu ứng hình ảnh, âm thanh nền (BGM) và cơ chế khởi tạo nhân vật trực quan.

---

## 🌟 Điểm Nổi Bật Của Giao Diện (Vibe & Tính Năng)

- 🏰 **Aesthetic Dark Gothic Hoàng Gia**: Sử dụng bảng màu Hoàng tộc sa đọa (`#080C14` Abyss, `#D4AF37` Gold Empire, `#991B1B` Crimson Throne) kết hợp hiệu ứng tàn tro / hoa đăng nổi trôi (`embers-container`).
- 🎭 **Cổng Hành Trình — Khởi Tạo Nhân Vật (Character Creator)**:
  - Lựa chọn chủng tộc, nghề nghiệp và danh xưng hoàng triều.
  - Phân bổ 6 điểm thuộc tính RPG cốt lõi: **STR** (Sức mạnh), **AGI** (Nhanh nhẹn), **CON** (Thể chất), **INT** (Trí tuệ), **WIL** (Ý chí), **PER** (Cảm tri).
  - Tích hợp các bộ chỉ số mẫu (Chiến Binh, Thuật Sĩ, Sát Thủ, Quý Tộc) và thanh trượt ngân sách hành trang.
- 💬 **Khung Hội Thoại Mô Phỏng (Dialogue Simulation)**:
  - Tương tác với **Dain (Quầy L5)** với bong bóng đối thoại phong cách Visual Novel, hiển thị trạng thái cảm xúc và độ thiện cảm.
  - Hỗ trợ nhập liệu mô phỏng tin nhắn và nút thao tác phản hồi nhanh.
- 🧭 **Lãnh Địa & Cẩm Nang Lữ Khách**:
  - Bản đồ lãnh địa tương tác và thông tin khu vực.
  - Bảng tra cứu lệnh roleplay chuẩn (Check stat, Roll xúc xắc, Inventory, Time skip...).
- 🎵 **Hệ Thống HUD & Âm Thanh Nền (BGM)**:
  - Thanh trạng thái hiển thị thời gian, địa điểm, số dư tiền vàng hoàng kim.
  - Trình phát BGM tích hợp danh sách nhạc không khí huyền ảo, điều chỉnh âm lượng và hiệu ứng trực quan.

---

## 📁 Cấu Trúc Thư Mục Repository

```text
the-throne-fall/
├── index.html       # Toàn bộ mã nguồn giao diện (HTML5, Tailwind CSS, Lucide Icons, BGM & Script)
├── README.md        # Tài liệu hướng dẫn dự án và triển khai
├── .gitignore       # Cấu hình bỏ qua các tệp không cần thiết khi commit Git
└── LICENSE          # Giấy phép mã nguồn mở MIT
```

> **Ghi chú**: Tệp `index.html` được thiết kế dạng **Single-Page Application (SPA) độc lập**, tích hợp sẵn hình ảnh và biểu tượng, giúp bạn có thể chạy ngay lập tức mà không cần cài đặt môi trường Node.js hay build phức tạp.

---

## 🚀 Hướng Dẫn Chạy Thử Nghiệm Trên Máy Cục Bộ (Local)

1. **Cách 1 (Đơn giản nhất)**: 
   Nhấp đúp trực tiếp vào tệp `index.html` để mở trên trình duyệt bất kỳ (Chrome, Edge, Firefox, Safari).

2. **Cách 2 (Sử dụng Python Web Server)**:
   Mở terminal tại thư mục dự án và chạy:
   ```bash
   python -m http.server 8000
   ```
   Sau đó truy cập: `http://localhost:8000`

3. **Cách 3 (Sử dụng VS Code Live Server)**:
   Mở thư mục trong Visual Studio Code, cài tiện ích **Live Server**, nhấp chuột phải vào `index.html` và chọn **Open with Live Server**.

---

## 🌐 Hướng Dẫn Tải Lên GitHub & Kích Hoạt GitHub Pages (Miễn Phí)

### Bước 1: Tạo Repository Mới Trên GitHub
1. Đăng nhập vào [GitHub](https://github.com/).
2. Nhấn vào nút **New** (Tạo repo mới).
3. Đặt tên repository (ví dụ: `the-throne-fall` hoặc `the-throne-fall-roleplay`).
4. Để chế độ **Public** và không cần tích chọn README/gitignore (vì gói này đã có sẵn).
5. Nhấn **Create repository**.

### Bước 2: Đẩy Mã Nguồn Lên GitHub Bằng Dòng Lệnh (Git CLI)
Mở terminal/cmd tại thư mục này và thực hiện lần lượt các lệnh:

```bash
# 1. Khởi tạo kho lưu trữ Git
git init

# 2. Thêm tất cả tệp vào danh sách chuẩn bị commit
git add .

# 3. Tạo commit đầu tiên
git commit -m "feat: initial commit for The Throne Fall interactive web app"

# 4. Đổi tên nhánh mặc định thành main
git branch -M main

# 5. Liên kết với repository GitHub của bạn (thay URL bằng link repo thật của bạn)
git remote add origin https://github.com/TÊN_GITHUB_CỦA_BẠN/TÊN_REPOSITORY.git

# 6. Đẩy mã nguồn lên GitHub
git push -u origin main
```

*(Nếu dùng GitHub Desktop, bạn chỉ cần chọn File -> Add Local Repository -> Chọn thư mục này rồi nhấn Publish repository)*.

### Bước 3: Bật Tính Năng GitHub Pages Để Tạo Web Online
Sau khi push code thành công:
1. Vào tab **Settings** của repository trên GitHub.
2. Ở thanh bên trái, chọn mục **Pages**.
3. Tại phần **Build and deployment** > **Branch**:
   - Chọn nhánh: **main**
   - Chọn thư mục: **/ (root)**
4. Nhấn **Save**.
5. Đợi khoảng 1–2 phút, GitHub Pages sẽ cung cấp cho bạn một đường link công khai dạng:
   `https://TÊN_GITHUB_CỦA_BẠN.github.io/TÊN_REPOSITORY/`

---

## 🛠️ Hướng Dẫn Mở Rộng & Phát Triển Tiếp

- **Tích hợp API Chatbot**: Trong `index.html`, bạn có thể nối sự kiện gửi tin nhắn tại hàm xử lý chat vào endpoint API AI (OpenAI, Gemini, Claude, hoặc backend tự dựng) để trò chuyện thực tế.
- **Thêm nhân vật & cốt truyện**: Bạn có thể bổ sung các thẻ nhân vật khác vào danh sách lựa chọn trong khu vực Character Creator.
- **Tùy biến âm thanh**: Thay thế các nguồn link audio BGM trực tuyến bằng file nhạc yêu thích trong thẻ `<audio>`.

---

*Dự án được xây dựng và đóng gói bởi Kail & Shion.* ⚔️🍷
