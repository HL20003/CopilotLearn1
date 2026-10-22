param([string]$Path)
# Mở workbook bằng Excel, tính toàn bộ công thức và lưu lại để file có sẵn giá trị (cached values)
$xl = New-Object -ComObject Excel.Application
$xl.Visible = $false
$xl.DisplayAlerts = $false
try {
    $wb = $xl.Workbooks.Open((Resolve-Path $Path).Path)
    $xl.CalculateFull()
    $wb.Sheets.Item(1).Activate()
    $wb.Save()
    $wb.Close($false)
    "recalculated: $Path"
} finally {
    $xl.Quit()
    [void][System.Runtime.InteropServices.Marshal]::ReleaseComObject($xl)
}
