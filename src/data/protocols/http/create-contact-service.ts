import { ContactModel } from "@/domain/models";

export namespace CreateContactService {
  export type Params = {
    company: string;
    email: string;
    firstname: string;
    lastname?: string;
    phone: string;
    website: string;
  };

  export type Result = Promise<ContactModel | null>;
}

export interface CreateContactService {
  post(params: CreateContactService.Params): CreateContactService.Result;
}
