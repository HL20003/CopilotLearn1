# Module 1 - Giới thiệu Copilot và chuẩn bị

> [!NOTE]
> **Toàn bộ tài liệu, số liệu và tình huống trong workshop là bản nháp (draft) dùng cho mục đích đào tạo.** Tên nhân vật, khách hàng và đối tác là giả định.

> [!NOTE]
> **Lưu ý khi thực hành:** không đưa dữ liệu cá nhân (CCCD/hộ chiếu, số tài khoản ngân hàng, lương, số điện thoại cá nhân), mật khẩu hay dữ liệu khách hàng thật vào prompt. Chỉ dùng file demo của workshop hoặc dữ liệu đã được ẩn danh.

---

## Bối cảnh workshop

Workshop dành cho **mọi nhân viên**, ở bất kỳ phòng ban hay cấp bậc nào. Các bài thực hành dùng chung một bộ tài liệu của **một công ty dịch vụ giả định** có nhiều văn phòng, để ai cũng làm theo được, sau đó áp dụng ngay vào công việc của chính mình.

| Thông tin công ty (số liệu minh họa) | Giá trị |
|--------------------------------------|---------|
| Nhân viên | **1.162 người** |
| Văn phòng | **6 văn phòng**: Hà Nội, TP. Hồ Chí Minh, Đà Nẵng, Hải Phòng, Cần Thơ, Bình Dương |
| Mảng dịch vụ | Tư vấn, Triển khai giải pháp, Dịch vụ vận hành, Đào tạo doanh nghiệp |
| Dự án đang triển khai | **150 dự án** |

### Mỗi lab dùng được cho ai?

Các lab không gắn với một phòng ban cố định. Bảng dưới đây gợi ý cách áp dụng theo vai trò:

| Lab | Ứng dụng | Nhân viên, chuyên viên | Trưởng nhóm, quản lý |
|-----|----------|------------------------|----------------------|
| 1 | Copilot Chat | Báo cáo tuần gửi quản lý, đối chiếu tài liệu | Báo cáo gửi cấp trên, cho ý kiến về kế hoạch |
| 2 | Word | Rà soát hợp đồng, văn bản trước khi trình | Kiểm tra điểm vượt chính sách trước khi duyệt |
| 3 | Excel | Phân tích số liệu, tạo cột tính toán, biểu đồ | Nắm nhanh kết quả, biết chỗ cần hỗ trợ |
| 4 | PowerPoint | Slide báo cáo, thuyết trình | Truyền thông kế hoạch cho đội |
| 5 | Outlook | Xử lý hộp thư, soạn thư khó | Phân loại việc cần quyết và việc giao lại |
| 6 | Teams | Bắt kịp cuộc họp, ghi việc của mình | Biên bản có người phụ trách và thời hạn |
| 7 | Researcher | Nghiên cứu chủ đề chuyên môn | Chuẩn bị đề xuất, chiến lược |
| 8 | Agent Builder | Trợ lý tra cứu cho cả nhóm | Trợ lý hướng dẫn nhân viên mới |

> [!TIP]
> Trong các prompt, phần đặt trong ngoặc vuông như **[tên dự án]**, **[phòng ban của tôi]** là chỗ anh/chị thay bằng thông tin của mình.

---

## Microsoft 365 Copilot là gì?

Microsoft 365 Copilot là trợ lý AI tích hợp trong các ứng dụng anh/chị dùng hằng ngày. Copilot kết hợp ba thành phần:

| Thành phần | Vai trò | Ví dụ trong công việc |
|------------|---------|-----------------------|
| **Mô hình ngôn ngữ lớn (LLM)** | Hiểu câu hỏi và viết câu trả lời bằng ngôn ngữ tự nhiên | Soạn email, tóm tắt báo cáo, viết lại văn bản |
| **Microsoft Graph** | "Bản đồ" dữ liệu công việc: email, lịch, file, cuộc họp, chat | Biết anh/chị vừa họp với ai, ai gửi file nào hôm qua |
| **Ứng dụng Microsoft 365** | Nơi Copilot làm việc cùng anh/chị | Nút Copilot trong Outlook, Excel, Teams... |

Nhờ Microsoft Graph, Copilot hiểu **ngữ cảnh công việc** của riêng anh/chị (còn gọi là **Work IQ**). Đây là điểm khác biệt lớn nhất so với các chatbot AI công cộng.

### Điều gì xảy ra khi anh/chị đặt câu hỏi?

| Bước | Điều gì xảy ra | Ý nghĩa với anh/chị |
|------|----------------|---------------------|
| **1. Đặt câu hỏi** | Anh/chị nhập prompt trong Outlook, Excel, Copilot Chat... | Không nhập dữ liệu cá nhân, mật khẩu vào prompt |
| **2. Tìm dữ liệu** | Copilot tìm trong email, file, cuộc họp mà **anh/chị có quyền xem** | Copilot không vượt quá quyền của anh/chị |
| **3. Soạn câu trả lời** | Mô hình AI dùng dữ liệu tìm được để viết câu trả lời | Câu trả lời tốt hay không phụ thuộc vào dữ liệu nguồn |
| **4. Kiểm tra** | Hệ thống kiểm tra bảo mật, chính sách và nội dung có hại | Áp dụng các chính sách bảo vệ của công ty |
| **5. Trả lời** | Kết quả hiển thị kèm **trích dẫn nguồn** | Bấm vào trích dẫn để kiểm tra lại trước khi dùng |

### Copilot nhìn thấy gì?

| Copilot có thể | Copilot không thể |
|----------------|-------------------|
| Đọc email, lịch, chat của chính anh/chị | Đọc email của đồng nghiệp |
| Đọc file trên OneDrive/SharePoint anh/chị có quyền | Mở file anh/chị không được chia sẻ |
| Dùng transcript cuộc họp anh/chị tham dự (đã bật transcript) | Truy cập cuộc họp anh/chị không tham dự |
| Tìm thông tin công khai trên web (chế độ **Web**) | Đọc hệ thống ERP, CRM, phần mềm nhân sự... nếu công ty chưa kết nối |

> [!NOTE]
> Copilot tuân theo đúng mô hình phân quyền Microsoft 365 hiện có. Copilot không cấp thêm quyền cho ai, nó chỉ giúp anh/chị **tìm nhanh hơn** những gì anh/chị vốn đã có quyền xem.

### Rủi ro thật sự: tài liệu chia sẻ quá rộng

Vì Copilot tìm kiếm rất giỏi, những tài liệu **đang bị chia sẻ sai** sẽ dễ bị tìm thấy hơn trước:

- File bảng lương hoặc đánh giá nhân viên để quyền **Everyone** trên SharePoint: mọi nhân viên đều xem được, và Copilot của họ cũng tìm thấy
- Link **"Anyone with the link"** gửi cho đối tác từ năm trước vẫn còn hiệu lực
- Thư mục của một phòng ban mở quyền cho toàn công ty thay vì chỉ thành viên phòng đó

> [!TIP]
> Trước khi dùng Copilot rộng rãi, hãy rà soát quyền chia sẻ các thư mục anh/chị quản lý, và gắn **nhãn phân loại** (Nội bộ, Mật, Tuyệt mật) cho tài liệu. Tài liệu Copilot tạo ra từ một file Mật thường được gắn nhãn Mật theo.

### Câu hỏi thường gặp về bảo mật

| Câu hỏi | Trả lời |
|---------|---------|
| Dữ liệu của công ty có được dùng để huấn luyện AI không? | **Không.** Prompt, câu trả lời và dữ liệu trong Microsoft 365 của công ty không được dùng để huấn luyện các mô hình nền tảng. |
| Đồng nghiệp có xem được prompt của tôi không? | **Không.** Lịch sử trò chuyện với Copilot chỉ hiển thị với anh/chị. |
| Công ty có lưu lại các tương tác với Copilot không? | Có thể. Công ty có thể ghi nhật ký và lưu giữ tương tác với Copilot theo chính sách tuân thủ, phục vụ kiểm toán. |
| Khi Copilot tìm trên web, dữ liệu nội bộ có bị gửi ra ngoài không? | Copilot chỉ gửi một **truy vấn tìm kiếm rút gọn** tới Bing, không gửi nguyên tài liệu. Công ty có thể tắt tìm kiếm web nếu cần. |
| Copilot có đọc được ERP, CRM hay phần mềm nhân sự không? | Chỉ khi công ty chủ động kết nối qua **Copilot connectors** và phân quyền. Mặc định là không. |

### Giới hạn của Copilot

| Giới hạn | Ví dụ | Cách xử lý |
|----------|-------|------------|
| **Có thể trả lời sai một cách tự tin** | Đưa ra định mức công tác phí "nghe hợp lý" nhưng không có trong quy định | Yêu cầu trích dẫn nguồn, đối chiếu tài liệu gốc |
| **Không có số liệu thời gian thực** | Không biết tồn kho hay doanh số của ngày hôm nay | Dùng hệ thống nghiệp vụ cho số liệu giao dịch |
| **Phụ thuộc vào dữ liệu nguồn** | File Excel thiếu dữ liệu thì phân tích cũng thiếu | Định dạng dữ liệu thành Table, kiểm tra trước |
| **Không thay thế phán đoán của con người** | Không quyết định tuyển dụng, đánh giá nhân viên hay phê duyệt chi tiêu thay người có thẩm quyền | Copilot gợi ý, con người quyết định |

### Bản đồ Copilot trong workshop

| Công cụ | Dùng để làm gì | Lab |
|---------|----------------|-----|
| **Copilot Chat** | Hỏi đáp xuyên ứng dụng, tổng hợp từ nhiều nguồn | Lab 1 |
| **Copilot trong Word, Excel, PowerPoint** | Rà soát, phân tích, trình bày trên tài liệu đang mở | Lab 2, 3, 4 |
| **Copilot trong Outlook, Teams** | Làm việc qua email, cuộc họp, chat | Lab 5, 6 |
| **Researcher** | Nghiên cứu chuyên sâu nhiều bước từ web và tài liệu nội bộ | Lab 7 |
| **Agent Builder** | Tự tạo trợ lý AI riêng cho nhóm | Lab 8 |

Trong Copilot Chat có nút chuyển **Work / Web**: **Work** trả lời dựa trên email, file, cuộc họp anh/chị có quyền truy cập; **Web** trả lời dựa trên thông tin công khai trên internet.

---

## Quy định sử dụng Copilot (giả định)

Các bài thực hành tuân theo bộ quy định giả định dưới đây, mô phỏng mục "Sử dụng công cụ trí tuệ nhân tạo" trong chính sách bảo mật thông tin của một công ty:

| Được làm | Không được làm |
|----------|----------------|
| Dùng Microsoft 365 Copilot, Copilot Chat và agent trong môi trường Microsoft 365 của công ty | Đưa dữ liệu nội bộ vào công cụ AI công cộng hoặc tài khoản AI cá nhân |
| Xử lý tài liệu Mật khi file đã gắn nhãn và anh/chị có quyền truy cập | Đưa thông tin Tuyệt mật (lương thưởng cá nhân, mật khẩu...) vào bất kỳ công cụ AI nào |
| Dùng mã đã ẩn danh khi cần nói về một người hay một khách hàng cụ thể | Nhập số CCCD, hộ chiếu, số tài khoản ngân hàng, mật khẩu vào prompt |
| Dùng Copilot soạn nháp báo cáo, tờ trình, biên bản rồi tự kiểm tra trước khi gửi | Để AI tự quyết định tuyển dụng, đánh giá, kỷ luật nhân viên hay phê duyệt chi tiêu |
| Bật transcript cuộc họp có khách hàng, đối tác **sau khi** đã thông báo và được đồng ý | Bật ghi âm, transcript mà không xin phép người tham dự bên ngoài |
| Chia sẻ agent tự tạo trong nội bộ, knowledge là SharePoint có phân quyền | Chia sẻ agent cho người ngoài công ty khi chưa được phê duyệt |

---

## Chuẩn bị

1. Đăng nhập Microsoft 365 bằng **tài khoản công ty** đã được cấp licence **Microsoft 365 Copilot**
2. Kiểm tra licence theo bảng bên dưới
3. Tải các file demo và lưu vào **OneDrive** (xem [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may))

### Kiểm tra licence

| Ứng dụng | Cách kiểm tra |
|----------|---------------|
| **Outlook** | Mở Outlook (web hoặc bản mới), thấy biểu tượng **Copilot** trên thanh công cụ |
| **Word, Excel, PowerPoint** | Mở một file bất kỳ, thấy nút **Copilot** trên ribbon, tab **Home** |
| **Teams** | Trong một cuộc họp hoặc khung chat, thấy biểu tượng **Copilot** |
| **Copilot Chat** | Truy cập [m365.cloud.microsoft](https://m365.cloud.microsoft/), thấy nút chuyển **Work / Web** |

> [!TIP]
> Nếu không thấy biểu tượng Copilot, hãy báo ngay cho người hướng dẫn để kiểm tra licence trước khi vào lab.

**Tiêu chí hoàn thành buổi học:** mỗi anh/chị chạy thành công **ít nhất 3 prompt** với công việc thật của mình (trên hộp thư, lịch hoặc tài liệu không chứa dữ liệu cá nhân nhạy cảm).

### Tải file demo

[download-files]

### Cách tải file Word/Excel về máy

1. Bấm vào từng file demo ở trên để tải về máy, hoặc bấm **Tải tất cả (.zip)** rồi giải nén
2. Mở [OneDrive](https://m365.cloud.microsoft/onedrive) bằng tài khoản công ty, tạo thư mục **Copilot Workshop**
3. Chọn **Add new** (hoặc **Upload**) > **Files**, chọn các file vừa tải về

> [!TIP]
> Copilot chỉ tham chiếu được file lưu trên OneDrive hoặc SharePoint. Khi viết prompt, gõ "/" để Copilot gợi ý file cần đính kèm.

---

Tiếp theo: **[Module 2 - Viết prompt hiệu quả](#module-2)**.
