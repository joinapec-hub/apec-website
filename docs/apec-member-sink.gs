/**
 * APEC member intake — Google Apps Script (bind to a Google Sheet).
 *
 * Setup:
 *   1. In your Google Sheet: Extensions → Apps Script.
 *   2. Paste this file, save.
 *   3. Deploy → New deployment → Web app.
 *        Execute as: Me   |   Who has access: Anyone
 *   4. Copy the Web app URL and set it as MEMBER_SINK_URL in Vercel.
 *
 * The website POSTs a JSON body for each signup/donation; this appends a row.
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Members') || ss.insertSheet('Members');

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Received At', 'Type', 'Name', 'Email', 'Phone',
        'Amount', 'Billing', 'Source', 'Details'
      ]);
      sheet.getRange(1, 1, 1, 9).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      data.receivedAt || new Date().toISOString(),
      data.type || '',
      data.name || '',
      data.email || '',
      data.phone || '',
      data.amount || '',
      data.recurring ? 'Recurring' : 'One-time',
      data.source || '',
      data.note || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/** Optional: lets you open the Web app URL in a browser to confirm it's live. */
function doGet() {
  return ContentService
    .createTextOutput('APEC member sink is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}
