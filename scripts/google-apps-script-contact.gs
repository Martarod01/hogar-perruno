/**
 * Pegar en Extensiones → Apps Script (desde la Google Sheet).
 * Después: Implementar → Nueva implementación → Aplicación web → Cualquier persona.
 *
 * Ajusta SHEET_NAME si tu pestaña no se llama "Hoja 1".
 */
const SHEET_NAME = "Hoja 1";

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      throw new Error('No existe la pestaña "' + SHEET_NAME + '"');
    }

    const p = e.parameter;

    if (p._gotcha) {
      return jsonResponse({ ok: true, skipped: "spam" });
    }

    sheet.appendRow([
      new Date(),
      p.source || "",
      p.name || "",
      p.phone || "",
      p.email || "",
      p.dog_name || "",
      p.dog_breed || "",
      p.dog_age || "",
      p.date_from || "",
      p.date_to || "",
      p.message || "",
      p.consent || "",
    ]);

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
