# THE THRONE FALL — Dưới Ngai Tàn

Website giới thiệu thế giới, Atlas, nhân vật và cẩm nang Tân thủ; kèm công cụ chuẩn bị hồ sơ để mang vào phiên chơi.

Public URL: https://hanayuki1201.github.io/The-Throne-Fall/

## Nội dung

- Hai ảnh nền không chữ: ngang cho desktop, dọc cho màn hình nhỏ.
- 4 bản đồ/sơ đồ, 6 miền đất, tính tuyến đi bộ Liora và phóng lớn ảnh.
- 8 NPC, nghề, hành trang, Hoa Đăng và các đối tượng cơ khí.
- Cẩm nang 21 chương chuyển từ bản tác giả, tìm kiếm và 63 mục lệnh có sao chép.
- Hồ sơ có tuổi, giới tính, thân phận cố định, kiểm chỉ số, xác nhận và xuất TXT.
- Hai bản nhạc Scott Buckley, phát sau thao tác đầu tiên, dừng/đổi bài/âm lượng; giữ lựa chọn tắt.

Website là cổng thông tin và chuẩn bị hồ sơ. Phiên roleplay diễn ra trong cuộc trò chuyện có bộ chơi của tác giả; website không tạo trạng thái chơi hoặc giả lập AI.

## Cập nhật

Sửa index.html (nội dung), styles.css (giao diện), app.js (tương tác), guide-data.js (cẩm nang). Giữ thư mục assets cùng cấp index.html. Push main để GitHub Pages cập nhật. Khi đổi CSS/JS hãy tăng tham số phiên bản trong index.html.

## Kiểm tra

node --check app.js

Chạy một static server tại thư mục gốc. Kiểm nhạc sau click, đổi bài/dừng, bản đồ và phóng ảnh, tìm cẩm nang, sao chép lệnh, kiểm tuổi theo cư dân, phân điểm, xác nhận và tải hồ sơ.

## Nguồn & ghi công

Nội dung, hình ảnh: dự án THE THRONE FALL của Độc Dược Ngọt Ngào.

The Miracle of Flight and Wanderlust by Scott Buckley — released under CC BY 4.0. https://www.scottbuckley.com.au/library/ . Full mixes are stored unmodified. License: https://creativecommons.org/licenses/by/4.0/ . Music attribution is also visible inside the website music player.

Fonts: Be Vietnam Pro and Noto Serif, SIL Open Font License; license files are in assets/fonts.

The repository MIT license covers source code; third-party audio/fonts retain their own licenses. Project text and artwork retain their respective rights.

## Bản menu game

Sảnh và từng khu là các màn độc lập trong cùng trang, không kéo xuyên suốt website. Chuyển mục không tải lại tài liệu nên nhạc và nội dung hồ sơ giữ nguyên.

- game.css: khung game toàn màn hình, rail menu, cửa sổ và responsive.
- game.js: điều hướng màn, hồ sơ 5 bước, điểm chọn Atlas, chọn NPC, hiệu ứng và chế độ giảm chuyển động.
- Hiệu ứng: bụi sáng nhẹ, nền theo chuột, viền điểm chọn và chuyển cảnh. Có nút tắt và tuân thủ prefers-reduced-motion.
- Bản đồ gốc chỉ định hướng, tọa độ điểm chọn là vị trí minh họa; dùng sơ đồ tuyến để tính quãng đường.

Tham khảo thiết kế (không sao chép tài sản):
https://immersive-g.com/projects/amazon-new-world/ — map-driven storytelling, hover interactions.
https://bruno-simon.com/ — website as interactive space, user-controlled effects/audio.
https://genshin.hoyoverse.com/en/map — presentation of regions.
