"""Chép file demo vào thư mục files/ của site (đường dẫn ASCII) và đóng gói zip để tải một lần.

Chạy lại sau mỗi lần tạo lại file demo. Tên tiếng Việt đầy đủ được giữ khi tải về
nhờ thuộc tính download trong app.js, nên tên ở đây chỉ cần ổn định và không dấu.
"""
import shutil
import zipfile
from pathlib import Path

SRC = Path(__file__).resolve().parent.parent
DST = SRC.parent / "public" / "files"

FILES = {  # đường dẫn trên site: tên file gốc
    "hop-dong-dich-vu-to-chuc-su-kien.docx": "Hợp đồng Dịch vụ Tổ chức Sự kiện (dự thảo).docx",
    "so-tay-chinh-sach-noi-bo.docx": "Sổ tay Chính sách Nội bộ.docx",
    "sample-chinh-sach-bao-mat-thong-tin.docx": "SAMPLE Chính sách Bảo mật Thông tin.docx",
    "bao-cao-ket-qua-kinh-doanh-q3-2026.xlsx": "Báo cáo Kết quả Kinh doanh Q3 2026.xlsx",
    "ke-hoach-hoat-dong-2027.docx": "Kế hoạch Hoạt động 2027 (dự thảo).docx",
}
ZIP_NAME = "copilot-workshop-demo-files.zip"

if DST.exists():
    shutil.rmtree(DST)
DST.mkdir(parents=True)
for site_name, src_name in FILES.items():
    shutil.copy2(SRC / src_name, DST / site_name)
with zipfile.ZipFile(DST / ZIP_NAME, "w", zipfile.ZIP_DEFLATED) as z:
    for src_name in FILES.values():
        z.write(SRC / src_name, arcname=src_name)
total = sum(p.stat().st_size for p in DST.iterdir())
print(f"{len(FILES)} file + zip -> {DST} ({total / 1024:.0f} KB)")
