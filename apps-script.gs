/**
 * Quỹ Khởi Sự Từ Tâm — Form receiver (handles both v1 and v2 payloads)
 *
 * Backward-compatible: detects the payload format and routes to the right
 * handler. Production submissions (old single-book format) still write to
 * the original "Donations" sheet with the original schema. New multi-book
 * submissions write to "Donations - v2.0" with the new schema.
 *
 *   payload has `items[]`  → v2 multi-book  → sheet "Donations - v2.0"
 *   payload has `book`     → v1 single-book → sheet "Donations"
 *   otherwise              → v2 with empty cart (logged for debugging)
 *
 * Triển khai:
 *   1. Sheet → Extensions → Apps Script → paste this file → Save
 *   2. Deploy → Manage deployments → Edit → Version: New version → Deploy
 *      (URL giữ nguyên)
 *
 * Test v1 (old single-book):
 *   curl -L -X POST -H 'Content-Type: text/plain' \
 *     -d '{"fullName":"Test V1","phone":"0901234567","email":"t@x.vn","donationType":"paper","book":"di-de-thuong","paperPrice":135000,"totalAmount":135000,"address":"123 ABC"}' \
 *     <URL_DEPLOY>
 *
 * Test v2 (new multi-book):
 *   curl -L -X POST -H 'Content-Type: text/plain' \
 *     -d '{"fullName":"Test V2","phone":"0901234567","email":"t@x.vn","items":[{"bookId":"di-de-thuong","qty":2},{"bookId":"tac-dong-tinh-gon","qty":1}],"address":"123 ABC"}' \
 *     <URL_DEPLOY>
 */

// ===== CONFIG =====
const SHEET_NAME_V1 = 'Donations';
const SHEET_NAME_V2 = 'Donations - v2.0';
const NOTIFY_EMAILS = [
  'info@quykhoisututam.com',
];
const SOURCE_LABEL = 'Landing page tặng sách';
// ==================

// Single source of truth for book title + price, mirrors src/data/books.ts
const BOOKS = {
  'di-de-thuong':                     { title: 'Đi để thương',                        price: 135000 },
  'tac-dong-tinh-gon':                { title: 'Tác động tinh gọn',                   price: 239000 },
  'thien-nguyen-chuyen-bien':         { title: 'Thiện nguyện tạo chuyển biến xã hội', price: 289000 },
  'to-chuc-phi-loi-nhuan-kieu-moi':   { title: 'Tổ chức phi lợi nhuận kiểu mới',      price: 249000 },
  'to-chuc-phi-loi-nhuan-thong-minh': { title: 'Tổ chức phi lợi nhuận thông minh',    price: 289000 },
};

// ---------- Router ----------

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    if (Array.isArray(payload.items) && payload.items.length > 0) {
      return handleV2_(payload);
    }
    if (payload.book) {
      return handleV1_(payload);
    }
    // Empty or unknown shape — store in v2 sheet so it doesn't get silently lost.
    return handleV2_(payload);
  } catch (err) {
    return jsonResponse_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return ContentService.createTextOutput(
    'Quỹ Khởi Sự Từ Tâm — Form endpoint hoạt động.'
  );
}

// ---------- V2 handler (multi-book + quantity) ----------

const HEADERS_V2 = [
  'Thời gian',
  'Họ và tên',
  'Số điện thoại',
  'Email',
  'Cuốn sách',
  'Tổng số cuốn',
  'Tổng tiền (VNĐ)',
  'Địa chỉ nhận sách',
  'Lời nhắn',
  'Nguồn',
];

function handleV2_(payload) {
  const sheet = getOrCreateSheetV2_();

  const items = Array.isArray(payload.items)
    ? payload.items.filter(function (it) { return it && it.bookId && Number(it.qty) > 0; })
    : [];

  const lines = items.map(function (it) {
    const info = BOOKS[it.bookId] || { title: String(it.bookId) };
    return info.title + ' x ' + Number(it.qty);
  });
  const booksCell = lines.join('\n');

  const totalCount = items.reduce(function (sum, it) {
    return sum + Number(it.qty || 0);
  }, 0);

  const totalAmount = items.reduce(function (sum, it) {
    const info = BOOKS[it.bookId];
    const price = info ? info.price : 0;
    return sum + price * Number(it.qty || 0);
  }, 0);

  const row = [
    new Date(),
    payload.fullName || '',
    payload.phone || '',
    payload.email || '',
    booksCell,
    totalCount,
    totalAmount,
    payload.address || '',
    payload.note || '',
    payload.source || SOURCE_LABEL,
  ];
  sheet.appendRow(row);

  // Enable text wrap on the "Cuốn sách" cell.
  const newRowIndex = sheet.getLastRow();
  const booksColIndex = HEADERS_V2.indexOf('Cuốn sách') + 1;
  sheet.getRange(newRowIndex, booksColIndex).setWrap(true).setVerticalAlignment('top');

  if (NOTIFY_EMAILS && NOTIFY_EMAILS.length > 0) {
    sendNotificationV2_(payload, row[0], lines, totalCount, totalAmount);
  }

  return jsonResponse_({ ok: true, version: 'v2' });
}

function getOrCreateSheetV2_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME_V2);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME_V2);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS_V2);
    sheet.getRange(1, 1, 1, HEADERS_V2.length)
      .setFontWeight('bold')
      .setBackground('#FFF1DD');
    sheet.setFrozenRows(1);
    const booksColIndex = HEADERS_V2.indexOf('Cuốn sách') + 1;
    sheet.setColumnWidth(booksColIndex, 280);
  }
  return sheet;
}

function sendNotificationV2_(payload, at, lines, totalCount, totalAmount) {
  const subject = '[Quỹ Khởi Sự Từ Tâm] Đơn ủng hộ mới — ' + (payload.fullName || 'Người ủng hộ');
  const bookSection = lines.length > 0
    ? ['DANH SÁCH SÁCH:'].concat(lines.map(function (l) { return '  • ' + l; })).join('\n')
    : 'DANH SÁCH SÁCH: (trống)';

  const body = [
    'Quỹ vừa nhận được một đơn ủng hộ mới qua landing page tặng sách:',
    '',
    '• Họ tên: ' + (payload.fullName || '—'),
    '• SĐT:    ' + (payload.phone || '—'),
    '• Email:  ' + (payload.email || '—'),
    '',
    bookSection,
    '',
    'TỔNG: ' + totalCount + ' cuốn — ' + Number(totalAmount).toLocaleString('vi-VN') + ' đ',
    '',
    payload.address ? '• Địa chỉ: ' + payload.address : null,
    payload.note ? '• Lời nhắn: ' + payload.note : null,
    '',
    'Thời gian: ' + Utilities.formatDate(at, 'Asia/Ho_Chi_Minh', "HH:mm 'ngày' dd/MM/yyyy"),
  ].filter(Boolean).join('\n');

  MailApp.sendEmail(NOTIFY_EMAILS.join(','), subject, body);
}

// ---------- V1 handler (legacy single-book — production frontend) ----------

const HEADERS_V1 = [
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

function handleV1_(payload) {
  const sheet = getOrCreateSheetV1_();

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
    sendNotificationV1_(payload, row[0]);
  }

  return jsonResponse_({ ok: true, version: 'v1' });
}

function getOrCreateSheetV1_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME_V1);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME_V1);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS_V1);
    sheet.getRange(1, 1, 1, HEADERS_V1.length)
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
  const info = BOOKS[id];
  if (info) return info.title;
  // Legacy fallback for books that were removed from the catalog.
  const legacy = {
    'tu-thien-dong-chay': 'Từ thiện trong dòng chảy văn hoá xã hội',
  };
  return legacy[id] || id || '';
}

function sendNotificationV1_(payload, at) {
  const subject = '[Quỹ Khởi Sự Từ Tâm] Đơn ủng hộ mới — ' + (payload.fullName || 'Người ủng hộ');
  const body = [
    'Quỹ vừa nhận được một đơn ủng hộ mới qua landing page tặng sách:',
    '',
    '• Họ tên: ' + (payload.fullName || '—'),
    '• SĐT:    ' + (payload.phone || '—'),
    '• Email:  ' + (payload.email || '—'),
    '• Hình thức: ' + formatDonationType_(payload.donationType),
    '• Cuốn sách: ' + formatBookId_(payload.book),
    payload.ebookTier && payload.ebookTier !== 'custom'
      ? '• Mức Ebook: ' + Number(payload.ebookTier).toLocaleString('vi-VN') + ' đ'
      : null,
    payload.customAmount
      ? '• Số tiền tuỳ tâm: ' + Number(payload.customAmount).toLocaleString('vi-VN') + ' đ'
      : null,
    payload.paperPrice
      ? '• Giá sách giấy: ' + Number(payload.paperPrice).toLocaleString('vi-VN') + ' đ'
      : null,
    payload.totalAmount
      ? '• TỔNG: ' + Number(payload.totalAmount).toLocaleString('vi-VN') + ' đ'
      : null,
    payload.address ? '• Địa chỉ: ' + payload.address : null,
    payload.note ? '• Lời nhắn: ' + payload.note : null,
    '',
    'Thời gian: ' + Utilities.formatDate(at, 'Asia/Ho_Chi_Minh', "HH:mm 'ngày' dd/MM/yyyy"),
  ].filter(Boolean).join('\n');

  MailApp.sendEmail(NOTIFY_EMAILS.join(','), subject, body);
}

// ---------- Shared ----------

function jsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
