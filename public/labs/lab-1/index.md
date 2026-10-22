# Lab 1 - Copilot Chat

**Ứng dụng:** Microsoft 365 Copilot Chat

> [!NOTE]
> **Toàn bộ tài liệu, số liệu và tình huống trong workshop là bản nháp (draft) dùng cho mục đích đào tạo.** Tên nhân vật, khách hàng và đối tác là giả định.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Tổng hợp email, cuộc họp và tài liệu của mình thành một báo cáo tuần
- Đặt nhiều tài liệu cạnh nhau để Copilot chỉ ra điểm khớp và điểm còn thiếu
- Chuyển sang chế độ Web để cập nhật xu hướng liên quan đến công việc

### Tính năng chính

| Tính năng | Mô tả |
|-----------|--------|
| **Work grounding** | Trả lời dựa trên email, lịch, cuộc họp, file mà anh/chị có quyền truy cập |
| **Phân tích nhiều tài liệu** | Đính kèm nhiều file bằng "/" và hỏi xuyên suốt các file |
| **Work / Web** | Chuyển giữa dữ liệu công việc nội bộ và thông tin công khai trên internet |

---

## Tình huống

> **Anh/chị** - *ở bất kỳ phòng ban nào*
>
> Sáng thứ Hai, anh/chị cần gửi báo cáo tuần cho quản lý trực tiếp, đồng thời được mời cho ý kiến về dự thảo Kế hoạch Hoạt động 2027 trước khi Phòng Kế hoạch trình Ban Giám đốc. Thông tin nằm rải rác trong hộp thư, các cuộc họp tuần qua và nhiều file khác nhau. Anh/chị dùng Copilot Chat để gom lại và đối chiếu.

**Tài liệu demo:** [Báo cáo Kết quả Kinh doanh Q3 2026.xlsx](#file-business) và [Kế hoạch Hoạt động 2027 (dự thảo).docx](#file-plan), đã lưu trên OneDrive.

*Xem toàn bộ file demo tại trang [Module 1](#module-1) và [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may).*

---

### Bài tập 1: Báo cáo tuần từ email và cuộc họp

**Cách thực hiện:**

1. Truy cập [https://m365.cloud.microsoft/](https://m365.cloud.microsoft/), đăng nhập bằng **tài khoản công ty**
2. Chọn **Copilot**, đảm bảo đang ở chế độ **Work**
3. Nhập prompt:

> **PROMPT:**
>
> Dựa trên email, cuộc họp và tài liệu của tôi trong 7 ngày qua, soạn báo cáo tuần gửi quản lý trực tiếp gồm 4 phần: việc đã hoàn thành, việc đang làm và tiến độ, vấn đề cần hỗ trợ hoặc cần quyết định, và kế hoạch tuần tới. Mỗi ý ghi rõ nguồn thông tin. Tối đa một trang.

**Kết quả mong đợi:** Một báo cáo có cấu trúc, mỗi ý có trích dẫn tới email, cuộc họp hoặc file gốc để anh/chị kiểm tra trước khi gửi.

> [!TIP]
> Bấm vào từng trích dẫn để kiểm tra. Ý nào không có nguồn rõ ràng, hãy hỏi tiếp: *"Ý thứ 3 lấy từ đâu?"*. Nếu anh/chị là quản lý, đổi người nhận thành *"Ban Giám đốc"* và thêm phần *"quyết định cần phê duyệt"*.

### Bài tập 2: Đối chiếu kế hoạch với số liệu thực tế

1. Mở cuộc trò chuyện mới, gõ "/" để đính kèm hai file [Báo cáo Kết quả Kinh doanh Q3 2026.xlsx](#file-business) và [Kế hoạch Hoạt động 2027 (dự thảo).docx](#file-plan)
2. Nhập prompt:

> **PROMPT:**
>
> Tôi được mời cho ý kiến về dự thảo Kế hoạch Hoạt động 2027. Đặt kế hoạch cạnh kết quả quý 3 trong file Excel và cho tôi biết: kế hoạch đã giải quyết những vấn đề nào đang thể hiện trong số liệu, vấn đề nào chưa được giải quyết, và 2 góp ý tôi nên gửi Phòng Kế hoạch. Trình bày dạng bảng.

**Kết quả mong đợi:** Copilot chỉ ra kế hoạch đã nhắm vào tỷ lệ nghỉ việc cao (20% so với ngành 13,5%), giờ làm thêm và NPS giảm, nhưng **chưa đề cập** hai vấn đề trong số liệu: lợi nhuận trước thuế giảm 16,8% so với quý 2 do chi phí thuê thầu phụ vượt kế hoạch 39%, và 36% doanh thu đến từ một khách hàng lớn nhất (ngành khoảng 20%).

### Bài tập 3: Cập nhật xu hướng với chế độ Web

1. Chuyển nút **Work / Web** sang **Web**
2. Nhập prompt:

> **PROMPT:**
>
> Tóm tắt những xu hướng nổi bật trong 3 tháng qua về thị trường lao động và việc ứng dụng AI tại nơi làm việc ở Việt Nam. Với mỗi xu hướng, nêu tác động có thể có tới một công ty dịch vụ khoảng 1.000 nhân viên và một việc nên làm. Kèm nguồn cho từng ý.

3. Hỏi tiếp để đưa kết quả vào công việc:

> **PROMPT:**
>
> Từ các xu hướng trên, soạn 3 thông điệp ngắn tôi có thể chia sẻ trong buổi họp đầu tuần với đồng nghiệp. Không đưa ra dự báo chắc chắn.

> [!TIP]
> Dùng **Work** cho câu hỏi về công việc nội bộ, **Web** cho thông tin công khai. Ở chế độ Web, Copilot không dùng email hay file nội bộ của anh/chị. Thay chủ đề bằng lĩnh vực của mình, ví dụ *"quy định về hóa đơn điện tử"* (Kế toán) hay *"xu hướng marketing trên mạng xã hội"* (Marketing).

---

## Lưu ý tuân thủ

> [!NOTE]
> Báo cáo gửi quản lý có thể chứa thông tin Mật: kiểm tra nhãn phân loại trước khi chia sẻ. Thông tin từ chế độ Web cần được kiểm tra nguồn trước khi chuyển cho người khác. Không nhập dữ liệu cá nhân vào prompt.

---

## Prompt đề xuất - Copilot Chat

### Làm việc hằng ngày

> **PROMPT:**
>
> 1. Những việc nào tôi đã hứa với quản lý hoặc đồng nghiệp trong 2 tuần qua mà chưa hoàn thành?
> 2. Tuần này tôi có những cuộc họp nào quan trọng, và cần chuẩn bị gì cho từng cuộc họp?

### Ra quyết định

> **PROMPT:**
>
> So sánh hai phương án trong file /[tên file]: ưu điểm, rủi ro, chi phí và tác động tới người dùng hoặc khách hàng của từng phương án. Đề xuất phương án nên chọn và lý do.

---

## Tổng kết

| Anh/chị đã học được | Tính năng |
|---------------------|-----------|
| Tổng hợp từ nhiều nguồn thành báo cáo tuần | Work grounding |
| Đối chiếu kế hoạch với số liệu để tìm điểm còn thiếu | Phân tích nhiều tài liệu |
| Cập nhật xu hướng và chuyển thành thông điệp cho nhóm | Work / Web |
