# File demo - Copilot Overview Workshop (bản general)

Tài liệu nháp (draft) dùng cho đào tạo, công ty giả định không nêu tên, dùng được cho mọi phòng ban. Đây là bản gốc; site phục vụ bản sao trong
`public/files/` (tên không dấu, khi tải về vẫn giữ tên đầy đủ).
Sau khi tạo lại file, chạy `python _gen/sync_site_files.py` để chép sang site và đóng gói lại file zip, rồi deploy.

| id trong app.js | File | Dùng ở |
|---|---|---|
| `contract` | Hợp đồng Dịch vụ Tổ chức Sự kiện (dự thảo).docx | Lab 2 Word |
| `handbook` | Sổ tay Chính sách Nội bộ.docx | Lab 2 Word, Lab 8 Agent Builder |
| `policy-sample` | SAMPLE Chính sách Bảo mật Thông tin.docx (cố ý lỗi định dạng) | Lab 2 Word (mở rộng) |
| `business` | Báo cáo Kết quả Kinh doanh Q3 2026.xlsx | Lab 1 Copilot Chat, Lab 3 Excel, Lab 7 Researcher |
| `plan` | Kế hoạch Hoạt động 2027 (dự thảo).docx | Lab 1 Copilot Chat, Lab 4 PowerPoint |

## Tạo lại file

Cần Python với `python-docx` và `openpyxl`, và Excel trên Windows (để tính sẵn giá trị công thức).

```bash
cd _gen
python gen_business.py       # sau đó: powershell -File recalc.ps1 -Path "..\Báo cáo Kết quả Kinh doanh Q3 2026.xlsx"
python gen_docs.py           # 4 file Word
python sync_site_files.py    # chép sang public/files + zip
```

`recalc.ps1` mở file bằng Excel để tính và lưu sẵn giá trị công thức (bắt buộc với file Báo cáo Kết quả Kinh doanh).
`gen_business.py` in ra đáp án Lab 3 Bài tập 2; nếu đổi seed hay tham số, cập nhật lại số trong `public/labs/lab-3/index.md`.
Trên Windows, đặt `PYTHONIOENCODING=utf-8` nếu terminal báo lỗi in tiếng Việt.

## Đáp án tham khảo cho người hướng dẫn

- **Lab 1 BT2:** Kế hoạch 2027 xử lý tỷ lệ nghỉ việc cao (20%, ngành 13,5%), giờ làm thêm và NPS giảm, nhưng chưa đề cập
  lợi nhuận trước thuế giảm 16,8% so với Q2 (chi phí thuê thầu phụ 50 tỷ, vượt kế hoạch 39%) và rủi ro phụ thuộc
  khách hàng lớn nhất (36% doanh thu, ngành 20%).
- **Lab 2 BT2:** điểm vượt Sổ tay: tạm ứng 50% (tối đa 30%, ngoại lệ do Giám đốc Tài chính duyệt kèm bảo lãnh tạm ứng, Mục 5.2),
  thanh toán 5 ngày sau sự kiện (chuẩn 30 ngày sau nghiệm thu), nhà cung cấp tự quyết phát sinh 10% (phải chấp thuận bằng văn bản, Mục 5.3),
  phí hủy 100% (trên 30% cần Pháp chế rà soát), phạt 5% (đề xuất 8%), mới 2 báo giá (cần 3), chia sẻ ngày sinh, số điện thoại,
  email cá nhân và dùng hình ảnh nhân viên (Mục 7.3). Hợp đồng 2,35 tỷ trên 2 tỷ: Tổng Giám đốc duyệt sau khi Pháp chế rà soát (Mục 5.1).
- **Lab 3:** BT1 doanh thu 432 tỷ (+3,3% so với Q2, đạt 99,1% KH) nhưng LNTT 84 tỷ (-16,8% so với Q2, đạt 79% KH), thuê thầu phụ vượt KH 39%,
  tỷ lệ nghỉ việc năm hóa 20,0% (KH 11,5%), NPS 36 (Q2 41), khách hàng lớn nhất 36% doanh thu;
  BT2 57 Đúng hướng / 71 Cần chú ý / 22 Rủi ro, tỷ lệ Rủi ro cao nhất TP. Hồ Chí Minh 13/52, Hải Phòng 2/11, Hà Nội 6/46;
  BT3 5/6 văn phòng có tỷ lệ nghỉ việc trên trung vị ngành 13,5%, cao nhất TP. Hồ Chí Minh 26,3%, chỉ Đà Nẵng thấp hơn (12,3%).
- **Lab 7:** nghỉ việc 20% (trung vị 13,5%), giờ đào tạo 19,2 giờ/người/năm (trung vị 32), khách hàng lớn nhất 36% (trung vị 20%),
  biên LNTT 19,4% (trung vị 22%), NPS 36 (trung vị 44).
- **Lab 8:** 6 năm thâm niên → 15 ngày phép, chuyển tối đa 5 ngày, dùng trước 31/03; chuyên viên đi Đà Nẵng: khách sạn tối đa
  1,2 triệu/đêm, ăn 250.000 đồng/ngày, quyết toán trong 10 ngày làm việc; mua sắm 650 triệu → 3 báo giá, Giám đốc Tài chính duyệt;
  tạm ứng 40% là ngoại lệ, cần Giám đốc Tài chính duyệt và bảo lãnh tạm ứng của ngân hàng.
