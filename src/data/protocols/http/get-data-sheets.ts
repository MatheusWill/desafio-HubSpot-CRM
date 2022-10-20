import { SheetsModel } from "@/domain/models";

export namespace GetSheetsService {
  export type Params = string;

  export type Result = Promise<SheetsModel>;
}

export interface GetSheetsService {
  get(params: GetSheetsService.Params): GetSheetsService.Result;
}
