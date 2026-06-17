function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Rekap Saran Gebyar Sincan 2026');
  var saran = e.parameter.saran_kritik || 'Tanpa saran';

  sheet.appendRow([new Date(), saran]);

  return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
