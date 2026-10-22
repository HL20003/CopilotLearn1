# Module 2 - Viết prompt hiệu quả

> [!NOTE]
> **Toàn bộ tài liệu, số liệu và tình huống trong workshop là bản nháp (draft) dùng cho mục đích đào tạo.** Tên nhân vật, khách hàng và đối tác là giả định.

---

## Mục tiêu

Sau module này, anh/chị sẽ:

- Viết prompt rõ ràng theo công thức 4 thành phần
- Biết cách hỏi tiếp để cải thiện kết quả thay vì viết lại từ đầu
- Dùng 5 kỹ thuật giúp câu trả lời an toàn và chính xác hơn
- Có sẵn bộ prompt mẫu cho công việc hằng ngày, dùng được ở mọi phòng ban

---

## Prompt là gì?

**Prompt** là yêu cầu anh/chị gửi cho Copilot bằng ngôn ngữ tự nhiên, giống như giao việc cho một trợ lý. Giao việc càng rõ, kết quả càng sát ý.

| Prompt chưa tốt | Prompt tốt hơn |
|-----------------|----------------|
| "Trả lời email này." | "Soạn thư trả lời khách hàng đang hỏi lịch họp tiến độ dự án, đề xuất 2 khung giờ tuần sau, giọng lịch sự và ngắn gọn." |
| "Tóm tắt báo cáo." | "Tóm tắt báo cáo kết quả quý 3 thành 5 ý cho quản lý trực tiếp của tôi, mỗi ý có một con số cụ thể." |
| "Vẽ biểu đồ." | "Tạo biểu đồ cột tỷ lệ nghỉ việc theo văn phòng, sắp xếp giảm dần, tiêu đề nêu văn phòng cao nhất." |

---

## Công thức 4 thành phần

| Thành phần | Câu hỏi tự đặt ra | Ví dụ |
|------------|-------------------|-------|
| **Mục tiêu** | Tôi cần Copilot làm gì? | "Soạn email nhắc tiến độ..." |
| **Ngữ cảnh** | Cho ai, để làm gì, tôi là ai? | "...gửi 6 thành viên dự án, đang chậm 2 tuần so với kế hoạch..." |
| **Nguồn** | Dựa trên tài liệu nào? | "...dựa trên file /Kế hoạch dự án..." |
| **Kỳ vọng** | Kết quả trông như thế nào? | "...giọng động viên, dưới 150 chữ, kết thúc bằng 3 việc cần làm trong tuần." |

### Ví dụ ghép đủ 4 thành phần

> **PROMPT:**
>
> Soạn email nhắc tiến độ gửi 6 thành viên dự án [tên dự án], hiện đang chậm 2 tuần so với kế hoạch. Dựa trên file /[Kế hoạch dự án]. Giọng động viên, dưới 150 chữ, kết thúc bằng 3 việc cụ thể cần làm trong tuần này.

> [!TIP]
> Không cần đủ 4 thành phần trong mọi prompt. Với việc đơn giản, một câu là đủ. Khi kết quả chưa sát ý, hãy bổ sung thành phần còn thiếu.

---

## Hỏi tiếp để cải thiện

Không cần viết prompt hoàn hảo ngay lần đầu. Hãy bắt đầu đơn giản rồi hỏi tiếp trong cùng cuộc trò chuyện:

| Lần | Prompt | Kết quả |
|-----|--------|---------|
| 1 | "Tóm tắt email chưa đọc." | Danh sách dài, khó biết việc nào gấp |
| 2 | "Chỉ giữ email của khách hàng và quản lý của tôi, cho tôi biết việc cần làm." | Gọn hơn, có việc cần làm |
| 3 | "Trình bày dạng bảng, thêm cột hạn chót, xếp việc gấp lên đầu." | Dùng được ngay để xử lý trong buổi sáng |

Một số câu hỏi tiếp hay dùng: *"ngắn hơn"*, *"trình bày dạng bảng"*, *"thêm số liệu"*, *"giọng trang trọng hơn"*, *"viết lại cho người không chuyên"*.

---

## 5 kỹ thuật để câu trả lời an toàn và chính xác hơn

### 1. Giao vai cho Copilot

Nói cho Copilot biết nó nên suy nghĩ như ai.

> **PROMPT:**
>
> Bạn là chuyên viên Pháp chế của công ty. Hãy đọc dự thảo hợp đồng này và chỉ ra những điều khoản bất lợi cho bên chúng tôi.

### 2. Đặt ràng buộc an toàn

Ngăn Copilot tự "điền" những thông tin chưa chắc chắn.

> **PROMPT:**
>
> Soạn thư trả lời khách hàng về tiến độ bàn giao. Không nêu ngày bàn giao hay chi phí nào chưa có trong email. Chỗ nào chưa chắc chắn thì ghi [CẦN XÁC NHẬN].

### 3. Yêu cầu trích dẫn nguồn

Giúp anh/chị kiểm tra nhanh câu trả lời đến từ đâu.

> **PROMPT:**
>
> Định mức khách sạn khi đi công tác Đà Nẵng của chuyên viên là bao nhiêu? Trả lời dựa trên file /Sổ tay Chính sách Nội bộ và ghi rõ mục tham chiếu. Nếu tài liệu không có thông tin, hãy nói rõ là không có.

### 4. Bảo Copilot hỏi lại khi thiếu thông tin

Tránh để Copilot đoán.

> **PROMPT:**
>
> Tôi cần soạn tờ trình xin phê duyệt mua phần mềm cho phòng. Trước khi viết, hãy hỏi tôi những thông tin còn thiếu.

### 5. Đưa mẫu đầu ra

Khi cần kết quả theo đúng định dạng quen thuộc, hãy cho Copilot xem một ví dụ.

> **PROMPT:**
>
> Tóm tắt cuộc họp theo đúng mẫu sau cho từng người: "[Tên] - Việc cần làm: [nội dung] - Hạn: [ngày] - Cần hỗ trợ: [có/không]".

---

## Đính kèm file và Prompt Gallery

### Gõ "/" để chỉ đúng tài liệu

- **Copilot Chat, Outlook, PowerPoint:** gõ `/` rồi chọn file trên OneDrive/SharePoint
- **Word, Excel:** Copilot làm việc trực tiếp với file đang mở
- Chỉ đúng file giúp Copilot không phải tự đoán và trả lời chính xác hơn

### Prompt Gallery

Microsoft có thư viện prompt mẫu để anh/chị tham khảo và lưu lại:

- **Trong ứng dụng:** mở Copilot, xem các prompt gợi ý
- **Online:** [Copilot Prompt Gallery](https://copilot.cloud.microsoft/prompts)
- Prompt hay của mình có thể **lưu lại** và **chia sẻ** cho đồng nghiệp

---

## Thư viện prompt dùng hằng ngày

Bộ prompt theo nhịp làm việc trong ngày, dùng được ở mọi vị trí. Anh/chị có thể sao chép và chỉnh lại cho phù hợp.

### Đầu ngày

> **PROMPT:**
>
> Tóm tắt email chưa đọc từ hôm qua, chia thành: việc cần tôi xử lý hôm nay, người đang chờ tôi phản hồi, và thông tin chỉ để biết.

### Trước một cuộc họp

> **PROMPT:**
>
> Chuẩn bị cho tôi cuộc họp [tên cuộc họp]: tóm tắt các email và tài liệu liên quan, những gì đã thống nhất lần trước, và 3 câu hỏi nên hỏi.

### Sau cuộc họp

> **PROMPT:**
>
> Liệt kê các việc cần làm của từng người trong cuộc họp vừa rồi, kèm thời hạn, đánh dấu việc chưa có thời hạn rõ ràng.

### Cuối tuần

> **PROMPT:**
>
> Tóm tắt những việc quan trọng tôi đã xử lý trong tuần qua dựa trên email, cuộc họp và tài liệu, và liệt kê các việc còn tồn để chuyển sang tuần sau.

---

## Gợi ý prompt theo phòng ban

Cùng công thức 4 thành phần, mỗi phòng ban chỉ cần thay mục tiêu và nguồn:

| Phòng ban | Ví dụ prompt |
|-----------|--------------|
| **Kinh doanh** | "Từ email trao đổi với khách hàng [tên] trong tháng qua, tóm tắt nhu cầu, phản đối còn mở và đề xuất bước tiếp theo." |
| **Nhân sự** | "Soạn bản mô tả công việc cho vị trí [chức danh] dựa trên file /[khung năng lực], gồm trách nhiệm chính, yêu cầu và quyền lợi." |
| **Tài chính - Kế toán** | "Giải thích 3 khoản mục chênh lệch lớn nhất giữa kế hoạch và thực hiện trong file /[báo cáo], viết cho người không chuyên tài chính." |
| **Marketing** | "Viết 3 phương án tiêu đề và đoạn mở đầu cho bản tin nội bộ về [chủ đề], giọng thân thiện, dưới 80 chữ mỗi phương án." |
| **Vận hành, CNTT** | "Từ chuỗi email về sự cố [tên sự cố], lập dòng thời gian: thời điểm, việc đã làm, người xử lý, và nguyên nhân gốc nếu đã xác định." |
| **Hành chính** | "Soạn thông báo gửi toàn công ty về lịch nghỉ Tết, gồm thời gian nghỉ, đầu mối trực và lưu ý khi làm việc từ xa." |

---

## Thực hành nhanh

Mở [Copilot Chat](https://m365.cloud.microsoft/) ở chế độ **Work** và thử hai prompt dưới đây với dữ liệu của chính anh/chị:

> **PROMPT:**
>
> Tuần này tôi có những cuộc họp nào và cần chuẩn bị gì cho từng cuộc họp?

> **PROMPT:**
>
> Những việc nào tôi đã hứa với người khác trong email 7 ngày qua mà chưa hoàn thành?

> [!NOTE]
> Hai prompt trên chỉ dùng dữ liệu anh/chị có quyền xem. Nếu kết quả trống, có thể do hộp thư hoặc lịch chưa có nhiều dữ liệu, hãy thử với khoảng thời gian dài hơn.

---

## Tóm lại

| Nguyên tắc | Ý chính |
|------------|---------|
| **Rõ ràng** | Mục tiêu, ngữ cảnh, nguồn, kỳ vọng |
| **Hỏi tiếp** | Bắt đầu đơn giản, chỉnh dần trong cùng cuộc trò chuyện |
| **An toàn** | Giao vai, ràng buộc, yêu cầu trích dẫn, bảo Copilot hỏi lại |
| **Chỉ đúng nguồn** | Gõ "/" để đính kèm file |
| **Dùng lại** | Lưu prompt hay vào Prompt Gallery và chia sẻ cho đồng nghiệp |

Tiếp theo: **[Module 3 - Personalization in Copilot](#module-3)**, để Copilot nhớ cách anh/chị làm việc.
