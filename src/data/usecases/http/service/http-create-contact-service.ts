import { CreateContactService, GetSheetsService } from "@/data/protocols/http";
import { CreateContact } from "@/domain/usecases";

export class HttpCreateContact implements CreateContact {
  constructor(
    private readonly createContactService: CreateContactService // private readonly getSheetsService: GetSheetsService
  ) {}

  async create(
    params: CreateContactService.Params
  ): CreateContactService.Result {
    const data = <any>params;

    data.shift();

    const formateContacts = data.map((value: any) => {
      return {
        properties: {
          company: value[0],
          firstname: value[1],
          email: value[2],
          phone: value[3],
          website: value[4],
        },
      };
    });

    const result = await this.createContactService.post(formateContacts);

    if (!result) throw new Error("CREATE_ERROR");

    return result;
  }
}
