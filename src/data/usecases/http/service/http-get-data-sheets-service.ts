import { GetDataSheets } from "@/domain/usecases";
import { google } from "googleapis";

export class HttpGetSheets implements GetDataSheets {
  async get(params: GetDataSheets.Params): GetDataSheets.Result {
    const { spreadSheetId, sheetName } = params;
    const spreadsheetId = spreadSheetId

    const auth = new google.auth.GoogleAuth({
      keyFile: "credentials.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({
      version: "v4",
      auth: client,
    });

    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: sheetName,
    });

    return getRows.data;
  }
}
