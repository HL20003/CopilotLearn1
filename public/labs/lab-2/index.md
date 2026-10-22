# Lab 2 - Copilot trong Word

**Ứng dụng:** Word

> [!NOTE]
> **Toàn bộ tài liệu, số liệu và tình huống trong workshop là bản nháp (draft) dùng cho mục đích đào tạo.** Tên nhân vật, khách hàng và đối tác là giả định.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Rà soát một văn bản dài: nắm điều khoản chính, rủi ro và câu hỏi cần làm rõ
- Đối chiếu văn bản với chính sách nội bộ để phát hiện điểm vượt quy định
- Soạn tờ trình xin phê duyệt gửi cấp có thẩm quyền

### Tính năng chính

| Tính năng | Mô tả |
|-----------|--------|
| **Document Q&A / Summarizing** | Hỏi đáp và tóm tắt trên tài liệu đang mở |
| **Đối chiếu tài liệu** | Tham chiếu file khác bằng "/" để so sánh với chính sách |
| **Content Generating** | Soạn văn bản mới dựa trên tài liệu nguồn |

---

## Tình huống

> **Anh/chị** - *người được giao rà soát hợp đồng trước khi trình ký*
>
> Công ty chuẩn bị ký hợp đồng với Công ty TNHH Sự kiện Lam Kiều để tổ chức Tiệc tất niên cho 650 nhân viên và Hội nghị Khách hàng 2027, tổng giá trị 2,35 tỷ đồng. Dự thảo đã được đàm phán xong. Anh/chị được giao kiểm tra dự thảo, đối chiếu với Sổ tay Chính sách Nội bộ và chuẩn bị tờ trình xin phê duyệt. Việc này có thể đến với bất kỳ ai: nhân viên hành chính, chuyên viên mua sắm, người phụ trách sự kiện hay trưởng phòng.

**Tài liệu demo:** [Hợp đồng Dịch vụ Tổ chức Sự kiện (dự thảo).docx](#file-contract) (cuối tài liệu có phần *Ghi chú của người soạn thảo* về các điểm đã thống nhất) và [Sổ tay Chính sách Nội bộ.docx](#file-handbook).

*Xem toàn bộ file demo tại trang [Module 1](#module-1) và [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may).*

---

### Bài tập 1: Rà soát dự thảo hợp đồng

**Cách thực hiện:**

1. Mở file [Hợp đồng Dịch vụ Tổ chức Sự kiện (dự thảo).docx](#file-contract)
2. Nhấn **Copilot** trên ribbon, nhập prompt:

> **PROMPT:**
>
> Tôi cần rà soát hợp đồng này trước khi trình ký. Hãy tóm tắt trong một bảng: các cam kết chính của bên cung cấp dịch vụ, các nghĩa vụ chính của công ty chúng tôi, giá trị và điều kiện thanh toán, và 5 rủi ro lớn nhất cho công ty. Cuối cùng liệt kê những điểm còn chưa chốt cần làm rõ với nhà cung cấp hoặc Pháp chế.

**Kết quả mong đợi:** Bảng tóm tắt hai chiều cam kết, giá trị 2,35 tỷ đồng, rủi ro (tạm ứng 50%, phí hủy đến 100%, nhà cung cấp tự quyết chi phí phát sinh, mức bồi thường chưa thống nhất, chia sẻ dữ liệu cá nhân của nhân viên) và danh sách điểm cần làm rõ (bảo hiểm trách nhiệm, phương án thời tiết).

### Bài tập 2: Đối chiếu với chính sách nội bộ

1. Vẫn trong khung Copilot, gõ "/" để tham chiếu file [Sổ tay Chính sách Nội bộ.docx](#file-handbook)
2. Nhập prompt:

> **PROMPT:**
>
> Đối chiếu các điều khoản trong phần Ghi chú của người soạn thảo với Sổ tay Chính sách Nội bộ. Lập bảng: điều khoản trong hợp đồng, quy định trong Sổ tay, có vượt quy định không, và cấp nào cần phê duyệt hoặc rà soát. Ghi rõ mục tham chiếu trong Sổ tay.

**Kết quả mong đợi:** Copilot chỉ ra các điểm vượt quy định: tạm ứng 50% (tối đa 30%, vượt cần Giám đốc Tài chính phê duyệt và bảo lãnh tạm ứng), thanh toán 5 ngày sau sự kiện (chuẩn 30 ngày sau nghiệm thu), nhà cung cấp tự quyết phát sinh 10% (phải được chấp thuận bằng văn bản), phí hủy 100% (trên 30% cần Pháp chế rà soát), mới có 2 báo giá (cần 3), chia sẻ ngày sinh, email cá nhân của nhân viên và dùng hình ảnh để quảng bá (Mục 7.3). Hợp đồng trên 2 tỷ đồng do Tổng Giám đốc phê duyệt sau khi Pháp chế rà soát (Mục 5.1).

> [!TIP]
> Yêu cầu **ghi rõ mục tham chiếu** giúp anh/chị kiểm tra nhanh từng kết luận, thay vì phải tin hoàn toàn vào Copilot.

### Bài tập 3: Soạn tờ trình xin phê duyệt

1. Mở một file Word mới, nhấn **Copilot**, gõ "/" để tham chiếu cả hai file
2. Nhập prompt:

> **PROMPT:**
>
> Dựa trên hợp đồng với Lam Kiều và các điểm vượt quy định so với Sổ tay, soạn tờ trình một trang gửi Tổng Giám đốc xin phê duyệt ký hợp đồng. Gồm: bối cảnh, các điểm cần phê duyệt ngoại lệ (dạng bảng), các điểm đề xuất đàm phán lại để đúng quy định, lợi ích, rủi ro và biện pháp kiểm soát, đề xuất của người trình. Giọng văn hành chính, ngắn gọn. Chỗ nào cần số liệu tôi bổ sung thì ghi [CẦN XÁC NHẬN].

**Kết quả mong đợi:** Bản nháp tờ trình đủ cấu trúc, bảng các điểm cần phê duyệt khớp với kết quả Bài tập 2, sẵn sàng để anh/chị chỉnh và trình ký.

---

## Mở rộng: từ chính sách thành hướng dẫn cho đồng nghiệp

File [SAMPLE Chính sách Bảo mật Thông tin.docx](#file-policy-sample) là bản chuyển từ PDF, định dạng còn lỗi. Copilot vẫn đọc được nội dung. Mở file và nhập:

> **PROMPT:**
>
> Từ chính sách này, soạn bản hướng dẫn một trang gửi toàn bộ nhân viên với tiêu đề "Dùng AI trong công việc: được làm và không được làm". Dạng bảng hai cột, tối đa 8 dòng, ngôn ngữ dễ hiểu, cuối trang nêu đầu mối liên hệ khi có sự cố.

---

## Lưu ý tuân thủ

> [!NOTE]
> Tờ trình và bảng đối chiếu do Copilot tạo chỉ là bản nháp: mọi con số, điều khoản và cấp phê duyệt phải được đối chiếu lại với văn bản gốc trước khi trình ký. Hợp đồng và báo giá là tài liệu Mật, chỉ lưu trên OneDrive/SharePoint của công ty.

---

## Prompt đề xuất - Word

### Summarizing

> **PROMPT:**
>
> Tóm tắt văn bản này thành một trang: thay đổi chính so với trước, ảnh hưởng tới phòng ban của tôi, và những việc tôi cần làm khác đi từ tháng tới.

### Review

> **PROMPT:**
>
> So sánh tài liệu này với phiên bản trước /[tên file]: liệt kê các thay đổi về điều khoản, số liệu và cam kết, đánh dấu thay đổi nào bất lợi cho công ty.

### Content Generating

> **PROMPT:**
>
> Soạn thông báo gửi toàn công ty về [chính sách mới]: giọng thân thiện, nêu rõ điều gì thay đổi, áp dụng từ khi nào, ai cần làm gì và đầu mối giải đáp.

---

## Tổng kết

| Anh/chị đã học được | Tính năng |
|---------------------|-----------|
| Rà soát dự thảo hợp đồng | Document Q&A / Summarizing |
| Đối chiếu với chính sách, xác định cấp phê duyệt | Đối chiếu tài liệu |
| Soạn tờ trình xin phê duyệt | Content Generating |
