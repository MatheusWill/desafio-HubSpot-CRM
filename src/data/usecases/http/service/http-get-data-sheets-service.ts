import { GetSheetsService } from "@/data/protocols/http";
import { GetDataSheets } from "@/domain/usecases";
import { google } from "googleapis";
import { ID } from "@/util";

export class HttpGetSheets implements GetDataSheets {
  async get(): GetDataSheets.Result {
    const spreadsheetId = "1UfeKFjjAu0avPqw_bxhvdOnrVLTHxfmvuErzAxtwUWI";

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
      range: "contatos",
    });

    return getRows.data;
  }
}
