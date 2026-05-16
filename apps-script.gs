/**
 * Quỹ Khởi Sự Từ Tâm — Form receiver
 *
 * Nhận POST từ landing page tang-sach, ghi 1 row vào Google Sheet
 * hiện tại, đồng thời gửi email thông báo cho team (tuỳ chọn).
 *
 * Triển khai:
 *  1. Tạo Google Sheet mới. Sheet đầu tiên đặt tên "Donations".
 *  2. Mở Extensions → Apps Script. Xoá hết code mẫu, paste file này vào.
 *  3. Cập nhật NOTIFY_EMAILS bên dưới (nếu muốn nhận mail).
 *  4. Bấm Save (Ctrl/Cmd + S), đặt tên project bất kỳ.
 *  5. Bấm Deploy → New deployment → chọn type "Web app":
 *       - Description: "Form endpoint v1"
 *       - Execute as: Me (chính account của bạn)
 *       - Who has access: Anyone
 *     → Deploy → Authorize access (chấp nhận các quyền)
 *  6. Copy URL hiển thị (dạng https://script.google.com/macros/s/.../exec)
 *  7. Gửi URL đó cho dev để paste vào constant GOOGLE_SHEETS_ENDPOINT
 *     trong DonationForm.astro.
 *
 * Test:
 *   curl -L -X POST -H 'Content-Type: text/plain' \
 *     -d '{"fullName":"Test","phone":"0901234567","email":"t@x.vn"}' \
 *     <URL_DEPLOY>
 */

// ===== CONFIG =====
const SHEET_NAME = 'Donations';
// Recipients receive an email each time the form is submitted.
// Add/remove addresses here. Leave the array empty if you don't want email notifications.
const NOTIFY_EMAILS = [
  'info@quykhoisututam.com',
  'anhdtm@quykhoisututam.com',
  'thutta4@quykhoisututam.com',
];
const SOURCE_LABEL = 'Landing page tặng sách';
// ==================

const HEADERS = [
  'Thời gian',
  'Họ và tên',
  'Số điện thoại',
  'Email',
  'Hình thức',
  'Cuốn sách',
  'Giá sách giấy (VNĐ)',
  'Mức Ebook (VNĐ)',
  'Số tiền tuỳ tâm (VNĐ)',
  'Tổng tiền (VNĐ)',
  'Địa chỉ nhận sách',
  'Lời nhắn',
  'Nguồn',
];

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    const sheet = getOrCreateSheet_(SHEET_NAME);

    const row = [
      new Date(),
      payload.fullName || '',
      payload.phone || '',
      payload.email || '',
      formatDonationType_(payload.donationType),
      formatBookId_(payload.book),
      payload.paperPrice ? Number(payload.paperPrice) : '',
      payload.ebookTier && payload.ebookTier !== 'custom' ? Number(payload.ebookTier) : '',
      payload.customAmount ? Number(payload.customAmount) : '',
      payload.totalAmount ? Number(payload.totalAmount) : '',
      payload.address || '',
      payload.note || '',
      payload.source || SOURCE_LABEL,
    ];
    sheet.appendRow(row);

    if (NOTIFY_EMAILS && NOTIFY_EMAILS.length > 0) {
      sendNotification_(payload, row[0]);
    }

    return jsonResponse_({ ok: true });
  } catch (err) {
    return jsonResponse_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return ContentService.createTextOutput(
    'Quỹ Khởi Sự Từ Tâm — Form endpoint hoạt động.'
  );
}

// ----- Helpers -----

function getOrCreateSheet_(name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  // Tạo header row nếu sheet đang trống
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight('bold')
      .setBackground('#FFF1DD');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function formatDonationType_(type) {
  switch (type) {
    case 'paper': return 'Sách giấy';
    case 'ebook': return 'Ebook';
    case 'both':  return 'Cả hai';
    default:      return type || '';
  }
}

function formatBookId_(id) {
  const map = {
    'tu-thien-dong-chay':                'Từ thiện trong dòng chảy văn hoá xã hội',
    'tac-dong-tinh-gon':                 'Tác động tinh gọn',
    'to-chuc-phi-loi-nhuan-kieu-moi':    'Tổ chức phi lợi nhuận kiểu mới',
    'to-chuc-phi-loi-nhuan-thong-minh':  'Tổ chức phi lợi nhuận thông minh',
    'thien-nguyen-chuyen-bien':          'Thiện nguyện tạo chuyển biến xã hội',
    'di-de-thuong':                      'Đi để thương',
  };
  return map[id] || id || '';
}

function sendNotification_(payload, at) {
  const subject = `[Quỹ Khởi Sự Từ Tâm] Đơn ủng hộ mới — ${payload.fullName || 'Người ủng hộ'}`;
  const body = [
    'Quỹ vừa nhận được một đơn ủng hộ mới qua landing page tặng sách:',
    '',
    `• Họ tên: ${payload.fullName || '—'}`,
    `• SĐT:    ${payload.phone || '—'}`,
    `• Email:  ${payload.email || '—'}`,
    `• Hình thức: ${formatDonationType_(payload.donationType)}`,
    `• Cuốn sách: ${formatBookId_(payload.book)}`,
    payload.ebookTier && payload.ebookTier !== 'custom'
      ? `• Mức Ebook: ${Number(payload.ebookTier).toLocaleString('vi-VN')} đ`
      : null,
    payload.customAmount
      ? `• Số tiền tuỳ tâm: ${Number(payload.customAmount).toLocaleString('vi-VN')} đ`
      : null,
    payload.paperPrice
      ? `• Giá sách giấy: ${Number(payload.paperPrice).toLocaleString('vi-VN')} đ`
      : null,
    payload.totalAmount
      ? `• TỔNG: ${Number(payload.totalAmount).toLocaleString('vi-VN')} đ`
      : null,
    payload.address ? `• Địa chỉ: ${payload.address}` : null,
    payload.note ? `• Lời nhắn: ${payload.note}` : null,
    '',
    `Thời gian: ${Utilities.formatDate(at, 'Asia/Ho_Chi_Minh', "HH:mm 'ngày' dd/MM/yyyy")}`,
  ].filter(Boolean).join('\n');

  MailApp.sendEmail(NOTIFY_EMAILS.join(','), subject, body);
}

function jsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
