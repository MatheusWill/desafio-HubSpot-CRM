export namespace GetDataSheets {
  export type Result = Promise<any | null>;
}

export interface GetDataSheets {
  get(): GetDataSheets.Result;
}
