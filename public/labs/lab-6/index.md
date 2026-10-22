# Lab 6 - Copilot trong Teams

**Ứng dụng:** Teams

> [!NOTE]
> **Toàn bộ tài liệu, số liệu và tình huống trong workshop là bản nháp (draft) dùng cho mục đích đào tạo.** Tên nhân vật, khách hàng và đối tác là giả định.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Bắt kịp cuộc họp khi vào muộn và phát hiện những điểm còn bất đồng để chốt
- Biến cuộc họp thành biên bản: quyết định, người phụ trách, thời hạn
- Nắm nhanh những gì đang diễn ra trong các nhóm chat và kênh

### Tính năng chính

| Tính năng | Mô tả |
|-----------|--------|
| **Copilot trong cuộc họp** | Hỏi đáp về nội dung cuộc họp đang diễn ra |
| **Recap** | Tóm tắt sau cuộc họp, ghi chú và việc cần làm |
| **Chat & Channel Summarizing** | Tóm tắt các cuộc trò chuyện nhóm và kênh |

---

## Tình huống

> **Anh/chị** - *thành viên hoặc người chủ trì một cuộc họp nhóm*
>
> Anh/chị vào muộn 15 phút một buổi họp nhóm về kế hoạch quý 4. Anh/chị cần nắm ngay những gì đã thống nhất, góp phần chốt các điểm còn tranh luận trước khi cuộc họp kết thúc, và sau đó có biên bản để theo dõi việc của từng người. Trong tuần, anh/chị cũng cần biết nhóm chat của dự án đang có vấn đề gì cần mình xử lý.

> [!NOTE]
> Copilot trong cuộc họp cần **bật transcript** (ghi lời thoại). Với cuộc họp có khách hàng hoặc đối tác bên ngoài, người chủ trì phải **thông báo và được các bên đồng ý** trước khi bật Recording & Transcription.

> [!TIP]
> Lab này thực hành trên **một cuộc họp Teams có thật** của anh/chị (đã bật transcript), ví dụ buổi họp nhóm hằng tuần.

---

### Bài tập 1: Vào họp muộn, bắt kịp trong 30 giây

**Cách thực hiện:**

1. Tham gia một cuộc họp Teams đã bật transcript
2. Nhấn nút **Copilot** trên thanh công cụ cuộc họp
3. Nhập prompt:

> **PROMPT:**
>
> Tôi vừa vào cuộc họp. Trong 3 câu, cho tôi biết đã quyết định những gì, ai đang phụ trách việc gì, và hiện mọi người đang thảo luận vấn đề nào.

### Bài tập 2: Tìm điểm còn bất đồng để chốt

> **PROMPT:**
>
> Trong cuộc họp này, có vấn đề nào mọi người chưa thống nhất hoặc câu hỏi nào chưa được trả lời không? Ai đang giữ quan điểm nào? Gợi ý cho tôi một câu hỏi để chốt lại từng vấn đề trước khi kết thúc họp.

**Kết quả mong đợi:** Danh sách vấn đề còn mở kèm quan điểm của từng người, giúp anh/chị chủ động chốt trước khi cuộc họp kết thúc.

### Bài tập 3: Biên bản sau cuộc họp

1. Sau cuộc họp, mở cuộc họp trong **Chat** hoặc **Calendar**, chọn tab **Recap**
2. Mở **Copilot** và nhập:

> **PROMPT:**
>
> Tạo biên bản cuộc họp: các quyết định đã chốt, bảng việc cần làm gồm Việc | Người phụ trách | Kết quả cần đạt | Thời hạn, và các vấn đề còn treo cần ai quyết định. Đánh dấu những việc chưa có người phụ trách hoặc thời hạn rõ ràng.

3. Hỏi tiếp để gửi cho cả nhóm:

> **PROMPT:**
>
> Soạn tin nhắn gửi nhóm họp: cảm ơn, tóm tắt 3 quyết định chính, nhắc từng người việc của mình và thời hạn.

> [!TIP]
> Nếu anh/chị chỉ là người tham dự, hỏi: *"Trong cuộc họp này, những việc nào được giao cho tôi và hạn khi nào?"*

### Bài tập 4: Tóm tắt nhóm chat

1. Mở một nhóm chat hoặc kênh (ví dụ nhóm chat của dự án hoặc của phòng)
2. Bấm **Copilot** ở góc trên khung chat và nhập:

> **PROMPT:**
>
> Tóm tắt các trao đổi trong 7 ngày qua: vấn đề nổi bật, câu hỏi chưa được trả lời, và những việc đang chờ tôi phản hồi.

---

## Lưu ý tuân thủ

> [!NOTE]
> Chỉ bật Recording và Transcription sau khi đã thông báo và được người tham dự bên ngoài đồng ý. Transcript cuộc họp có khách hàng là dữ liệu Mật, chỉ lưu trong Teams/SharePoint của công ty. Biên bản do Copilot tạo phải được người chủ trì rà soát trước khi gửi.

---

## Prompt đề xuất - Teams

### Trong cuộc họp

> **PROMPT:**
>
> 1. Có nội dung nào trong cuộc họp yêu cầu tôi thực hiện hoặc phản hồi không?
> 2. Những con số nào đã được đưa ra trong cuộc họp (chỉ tiêu, chi phí, thời hạn)? Liệt kê kèm người nói.

### Sau cuộc họp

> **PROMPT:**
>
> So sánh cuộc họp này với cuộc họp tuần trước: những việc nào đã hoàn thành, những việc nào bị lùi thời hạn?

### Chat & Channel

> **PROMPT:**
>
> Trong kênh của phòng tuần này, có thông báo hoặc quyết định nào tôi cần biết hoặc cần truyền đạt lại cho người khác không?

---

## Tổng kết

| Anh/chị đã học được | Tính năng |
|---------------------|-----------|
| Bắt kịp cuộc họp và chốt điểm còn bất đồng | Copilot trong cuộc họp |
| Biên bản có người phụ trách, thời hạn | Recap |
| Nắm nhanh tình hình trong nhóm chat | Chat & Channel Summarizing |
