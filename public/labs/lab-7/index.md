# Lab 7 - Researcher Agent

**Ứng dụng:** Microsoft 365 Copilot app - Researcher

> [!NOTE]
> **Toàn bộ tài liệu, số liệu và tình huống trong workshop là bản nháp (draft) dùng cho mục đích đào tạo.** Tên nhân vật, khách hàng và đối tác là giả định.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Giao cho Researcher một đề bài dạng câu hỏi cụ thể, không chỉ "nghiên cứu về..."
- Định hình báo cáo theo người đọc thông qua câu hỏi làm rõ
- Kết nối nghiên cứu bên ngoài với số liệu nội bộ để ra đề xuất hành động

**Researcher Agent** là một tác nhân AI của Microsoft 365 Copilot, chuyên nghiên cứu sâu, tổng hợp thông tin từ nhiều nguồn (web và tài liệu nội bộ) và đối chiếu với dữ liệu doanh nghiệp để đưa ra báo cáo phân tích chuyên sâu.

---

## Tình huống

> **Anh/chị** - *người được giao chuẩn bị một đề xuất*
>
> Ban Giám đốc chuẩn bị chốt Kế hoạch Hoạt động 2027 và mời các phòng ban góp ý: những thay đổi về quy định và thị trường lao động gần đây ảnh hưởng thế nào tới công ty? Thay vì tự đọc hàng chục văn bản và bài phân tích, anh/chị giao cho Researcher ba câu hỏi cụ thể, yêu cầu đối chiếu với số liệu quý 3 và trả về một memo có đề xuất.

**Tệp đính kèm:** [Báo cáo Kết quả Kinh doanh Q3 2026.xlsx](#file-business)

*Xem toàn bộ file demo tại trang [Module 1](#module-1) và [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may).*

---

### Bài tập 1: Giao đề bài nghiên cứu

**Cách thực hiện:**

1. Truy cập [https://m365.cloud.microsoft/](https://m365.cloud.microsoft/) và đăng nhập bằng **tài khoản công ty** (tài khoản Microsoft 365 do công ty cấp) - **không dùng** tài khoản Microsoft cá nhân như Outlook.com, Hotmail
2. Chọn **Researcher** trong mục Agents
3. Đính kèm file [Báo cáo Kết quả Kinh doanh Q3 2026.xlsx](#file-business) (xem [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may))
4. Nhập prompt:

> **PROMPT:**
>
> Tôi cần chuẩn bị góp ý cho Kế hoạch Hoạt động 2027 của một công ty dịch vụ khoảng 1.200 nhân viên tại Việt Nam. Hãy trả lời 3 câu hỏi:
> 1. Trong 12 tháng qua, những quy định nào mới ban hành hoặc có hiệu lực về bảo vệ dữ liệu cá nhân, lao động và việc sử dụng trí tuệ nhân tạo ảnh hưởng tới doanh nghiệp tại Việt Nam?
> 2. Đặt cạnh số liệu trong file Báo cáo Kết quả Kinh doanh Q3 2026.xlsx (sheet PL_Budget_Actual và Benchmark), công ty đang chịu rủi ro lớn nhất ở đâu so với các doanh nghiệp cùng ngành?
> 3. Đề xuất 3 điều chỉnh cho kế hoạch 2027, mỗi điều chỉnh nêu tác động dự kiến và mức độ ưu tiên.
>
> Mỗi kết luận về quy định phải có trích dẫn nguồn.

### Bài tập 2: Trả lời câu hỏi làm rõ

Researcher sẽ hỏi lại để làm rõ phạm vi nghiên cứu. Đây là lúc định hình báo cáo theo người đọc. Trả lời:

> **PROMPT:**
>
> 12 tháng tính đến hiện tại, so sánh với các doanh nghiệp dịch vụ có quy mô tương đương. Người đọc là Ban Giám đốc nên viết dạng memo khoảng 3-4 trang: mở đầu bằng bảng tóm tắt rủi ro (vấn đề, mức độ, đề xuất), phần phân tích chi tiết để sau.

**Kết quả mong đợi:** Agent lập **Research Plan** nhiều bước, tự thu thập dữ liệu, đối chiếu với `Báo cáo Kết quả Kinh doanh Q3 2026.xlsx` và xuất memo Word có bảng tóm tắt rủi ro ở đầu. Các rủi ro nổi bật nên được chỉ ra: tỷ lệ nghỉ việc năm hóa 20% (trung vị ngành 13,5%) đi kèm giờ đào tạo thấp, 36% doanh thu phụ thuộc một khách hàng (trung vị ngành 20%), và biên lợi nhuận giảm còn 19,4% (trung vị 22%) do chi phí thuê thầu phụ.

> [!TIP]
> Researcher thường mất vài phút để hoàn thành. Anh/chị có thể chuyển sang việc khác và quay lại khi báo cáo xong. Với công việc của mình, hãy thay 3 câu hỏi bằng chủ đề của phòng ban, ví dụ *"xu hướng tuyển dụng ngành công nghệ"* hay *"thay đổi về thuế và hóa đơn điện tử"*.

> [!NOTE]
> Luôn kiểm tra nguồn trích dẫn trong báo cáo của Researcher, đặc biệt với thông tin pháp lý và số liệu ngành, trước khi dùng cho quyết định quan trọng.

---

## Lưu ý tuân thủ

> [!NOTE]
> Researcher kết hợp dữ liệu web và tài liệu nội bộ. Không đưa dữ liệu cá nhân hay tên khách hàng vào đề bài. Báo cáo là tài liệu tham khảo, không thay thế ý kiến của Pháp chế; luôn mở nguồn trích dẫn để kiểm tra văn bản pháp luật gốc.

---

## Tổng kết

| Anh/chị đã học được | Ứng dụng |
|---------------------|----------|
| Giao đề bài dạng câu hỏi cụ thể | Researcher |
| Định hình báo cáo theo người đọc | Researcher |
| Kết nối nghiên cứu với số liệu nội bộ để ra đề xuất | Researcher + Excel |
