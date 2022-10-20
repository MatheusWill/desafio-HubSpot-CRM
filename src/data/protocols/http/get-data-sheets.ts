export namespace GetSheetsService {
  export type Result = Promise<any>;
}

export interface GetSheetsService {
  get(): GetSheetsService.Result;
}
