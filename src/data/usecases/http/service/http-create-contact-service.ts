import { CreateContactService, GetSheetsService } from "@/data/protocols/http";
import { CreateContact } from "@/domain/usecases";
import { headerListTransaction } from "@/util";

export class HttpCreateContactService implements CreateContact {
  constructor(
    private readonly createContactService: CreateContactService,
    private readonly getSheetsService: GetSheetsService
  ) {}

  async create(params: string): CreateContactService.Result {
    const sheetsData = await this.getSheetsService.get(params);

    const contacts = headerListTransaction.map((value) => ({
      key: value.key,
      header: value.name,
    }));

    if (!contacts) throw new Error("CONTACTS_ERROR.");

    const result = await this.createContactService.post(sheetsData);

    if (!result) throw new Error("CREATE_ERROR");

    return result;
  }
}
