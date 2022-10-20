import { ContactModel } from "@/domain/models";

export namespace CreateContact {
  export type Params = string;

  export type Result = Promise<ContactModel | null>;
}

export interface CreateContact {
  create(params: CreateContact.Params): CreateContact.Result;
}
