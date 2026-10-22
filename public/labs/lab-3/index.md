# Lab 3 - Copilot trong Excel

**Ứng dụng:** Excel

> [!NOTE]
> **Toàn bộ tài liệu, số liệu và tình huống trong workshop là bản nháp (draft) dùng cho mục đích đào tạo.** Tên nhân vật, khách hàng và đối tác là giả định.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Hỏi Copilot về workbook nhiều sheet như hỏi một chuyên viên phân tích, nhận câu trả lời có số liệu và nguồn
- Tạo cột phân loại theo tiêu chí của mình và tổng hợp kết quả
- Tạo biểu đồ so sánh với chuẩn ngành, tiêu đề nói lên điều cần hành động

### Tính năng chính

| Tính năng | Mô tả |
|-----------|--------|
| **Insights** | Phân tích chuyên sâu, tìm xu hướng và biến động |
| **Formula** | Tạo cột tính toán, phân loại theo tiêu chí |
| **Infographic** | Trực quan hóa dữ liệu bằng biểu đồ |

---

## Tình huống

> **Anh/chị** - *người cần hiểu nhanh một file số liệu*
>
> Mười phút trước cuộc họp, anh/chị nhận được workbook kết quả quý 3 của công ty. Anh/chị cần nắm nhanh bức tranh tổng thể, biết những dự án nào đang có vấn đề, và có một biểu đồ cho thấy công ty đang đứng ở đâu so với các doanh nghiệp cùng ngành về tỷ lệ nghỉ việc. Không cần là chuyên gia Excel: Copilot sẽ viết công thức và tạo biểu đồ cho anh/chị.

**Tệp demo:** [Báo cáo Kết quả Kinh doanh Q3 2026.xlsx](#file-business), gồm các sheet *Tổng quan Q3*, *PL_Budget_Actual*, *Doanh thu tháng*, *Danh sách dự án*, *Theo văn phòng*, *Benchmark*

*Xem toàn bộ file demo tại trang [Module 1](#module-1) và [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may).*

---

### Bài tập 1: Bức tranh quý 3 trong 5 ý

**Cách thực hiện:**

1. Mở file [Báo cáo Kết quả Kinh doanh Q3 2026.xlsx](#file-business)
2. Nhấn **Copilot** trên ribbon
3. Nhập prompt:

> **PROMPT:**
>
> Tôi sắp vào cuộc họp. Dựa trên workbook này, quý 3 công ty đang tốt lên hay xấu đi so với quý 2 và so với kế hoạch? Điều gì đáng lo nhất và vì sao? Trả lời trong đúng 5 gạch đầu dòng, mỗi ý có con số cụ thể và ghi tên sheet lấy số liệu.

**Kết quả mong đợi:** 5 ý ngắn có số liệu, ví dụ: doanh thu 432 tỷ đồng, tăng 3,3% so với quý 2 nhưng lợi nhuận trước thuế giảm 16,8% vì chi phí thuê thầu phụ vượt kế hoạch 39%; tỷ lệ nghỉ việc năm hóa 20% so với kế hoạch 11,5%; NPS giảm từ 41 xuống 36; 36% doanh thu đến từ một khách hàng.

### Bài tập 2: Phân loại dự án theo tình trạng

> **PROMPT:**
>
> Trong sheet Danh sách dự án, thêm cột "Tình trạng": "Rủi ro" nếu dự án vừa chậm tiến độ (% hoàn thành thấp hơn % thời gian đã qua quá 10 điểm phần trăm) vừa vượt chi phí (chi phí lũy kế chia ngân sách lớn hơn % hoàn thành); "Đúng hướng" nếu không chậm tiến độ và không vượt chi phí; còn lại là "Cần chú ý". Sau đó lập bảng đếm số dự án theo từng tình trạng và từng văn phòng, và chỉ ra 3 văn phòng có tỷ lệ dự án "Rủi ro" cao nhất.

**Kết quả mong đợi:** Cột Tình trạng dùng công thức và bảng tổng hợp theo văn phòng. Toàn công ty có 57 dự án Đúng hướng, 71 Cần chú ý và 22 Rủi ro; tỷ lệ Rủi ro cao nhất ở TP. Hồ Chí Minh (13/52 dự án), Hải Phòng (2/11) và Hà Nội (6/46).

> [!TIP]
> Bấm vào một ô trong cột mới để xem công thức Copilot đã viết. Hiểu công thức giúp anh/chị tự điều chỉnh tiêu chí (ví dụ đổi ngưỡng 10 điểm thành 5 điểm) mà không cần hỏi lại.

### Bài tập 3: So sánh với chuẩn ngành

> **PROMPT:**
>
> Từ sheet Theo văn phòng, tạo biểu đồ cột thể hiện tỷ lệ nghỉ việc năm hóa của từng văn phòng, sắp xếp từ cao xuống thấp, thêm một đường ngang là trung vị của nhóm doanh nghiệp so sánh lấy từ sheet Benchmark. Tô màu khác cho các văn phòng trên 15%. Đặt tiêu đề nêu đúng phát hiện chính, không chỉ ghi tên chỉ số.

**Kết quả mong đợi:** Biểu đồ có đường chuẩn 13,5%, tiêu đề nêu phát hiện, ví dụ *"5 trên 6 văn phòng có tỷ lệ nghỉ việc cao hơn trung vị ngành 13,5%, cao nhất là TP. Hồ Chí Minh với 26,3%"*.

---

## Lưu ý tuân thủ

> [!NOTE]
> Báo cáo kết quả kinh doanh chi tiết là thông tin Mật. Chỉ dùng Copilot với file đã gắn nhãn phân loại và mã khách hàng, mã nhân viên đã ẩn danh. Số liệu Copilot tính phải được đối chiếu với báo cáo chính thức trước khi gửi đi.

---

## Prompt đề xuất - Excel

### Insights Analysis

> **PROMPT:**
>
> 1. So sánh hai văn phòng [tên văn phòng] và [tên văn phòng]: khác nhau ở đâu về doanh thu trên mỗi nhân viên, biên lợi nhuận, giờ làm thêm và tỷ lệ nghỉ việc? Điều gì giải thích chênh lệch?
> 2. Với tốc độ hiện tại, công ty có đạt kế hoạch doanh thu cả năm không? Mỗi tháng còn lại cần thêm bao nhiêu để đạt?

### Formulas

> **PROMPT:**
>
> 1. Thêm cột "Chi phí còn lại" bằng ngân sách trừ chi phí lũy kế, và cột cảnh báo cho dự án đã dùng hơn 90% ngân sách.
> 2. Thêm cột số ngày còn lại đến ngày kết thúc kế hoạch, tính từ ngày 30/09/2026.

### Chart / Infographic Generation

> **PROMPT:**
>
> Từ sheet PL_Budget_Actual, tạo biểu đồ thác nước (waterfall) giải thích chênh lệch giữa lợi nhuận trước thuế kế hoạch và thực hiện quý 3 theo từng khoản mục doanh thu và chi phí.

> [!NOTE]
> Dữ liệu nên được định dạng dạng **Table** (Ctrl + T) để Copilot đọc chính xác hơn. Với file Excel của chính anh/chị, hãy thay tên sheet và tên cột trong prompt cho khớp.

---

## Tổng kết

| Anh/chị đã học được | Tính năng |
|---------------------|-----------|
| Nắm nhanh bức tranh tổng thể, có số liệu và nguồn | Insights |
| Phân loại dữ liệu theo tiêu chí riêng | Formula |
| Biểu đồ so sánh với chuẩn ngành, tiêu đề nêu phát hiện | Infographic |
