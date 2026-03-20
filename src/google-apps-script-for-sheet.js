/**
 * Google Apps Script – paste this into script.google.com
 * Deploy as Web app: Execute as "Me", Who has access: "Anyone"
 * 
 * SETUP:
 * 1. Create a Google Sheet (or use existing).
 * 2. In the sheet, add a first row with headers: Timestamp | Full Name | Work Email | Company | Looking For | Requirement
 * 3. In Apps Script: Replace 'YOUR_SPREADSHEET_ID' below with your sheet's ID (from the URL: .../d/SPREADSHEET_ID/edit)
 * 4. Deploy: Deploy > New deployment > Type: Web app > Execute as: Me, Who has access: Anyone > Deploy. Copy the Web app URL.
 * 5. Use that URL in the app (QuoteModal and ContactForm) as GOOGLE_SCRIPT_URL.
 */

function doPost(e) {
  try {
    var sheet = getSheet();
    if (!sheet) {
      return jsonResponse({ error: "Sheet not configured" }, 500);
    }

    var data = parseRequest(e);
    if (!data) {
      return jsonResponse({ error: "Invalid request" }, 400);
    }

    sheet.appendRow([
      new Date().toISOString(),
      data.fullName || "",
      data.workEmail || "",
      data.company || "",
      data.lookingFor || "",
      data.requirement || ""
    ]);

    return jsonResponse({ status: "ok", message: "Saved" });
  } catch (err) {
    return jsonResponse({ error: String(err.message) }, 500);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Form endpoint – use POST to submit.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function getSheet() {
  var spreadsheetId = "1GuxsakAHHjZfPU2K6Q3bLZ_iEh2mny90nrtcmKwBh2E";
  if (!spreadsheetId) {
    return null;
  }
  var ss = SpreadsheetApp.openById(spreadsheetId);
  return ss.getSheets()[0];
}

function parseRequest(e) {
  var fullName, workEmail, company, lookingFor, requirement;

  if (e.parameter) {
    fullName = e.parameter.fullName;
    workEmail = e.parameter.workEmail;
    company = e.parameter.company;
    lookingFor = e.parameter.lookingFor;
    requirement = e.parameter.requirement;
  }

  if (e.postData && e.postData.contents) {
    try {
      var json = JSON.parse(e.postData.contents);
      fullName = fullName || json.fullName;
      workEmail = workEmail || json.workEmail;
      company = company || json.company;
      lookingFor = lookingFor || json.lookingFor;
      requirement = requirement || json.requirement;
    } catch (e) {}
  }

  return {
    fullName: fullName || "",
    workEmail: workEmail || "",
    company: company || "",
    lookingFor: lookingFor || "",
    requirement: requirement || ""
  };
}

function jsonResponse(obj, statusCode) {
  var code = statusCode || 200;
  var output = ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
  return output;
}
