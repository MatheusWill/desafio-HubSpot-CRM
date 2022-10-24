export namespace GetDataSheets {
  export type Params = {
    spreadSheetId: string;
    sheetName: string;
  };
  export type Result = Promise<any | null>;
}

export interface GetDataSheets {
  get(params: GetDataSheets.Params): GetDataSheets.Result;
}
