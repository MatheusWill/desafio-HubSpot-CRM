import { CreateContact, GetDataSheets } from "@/domain/usecases";
import { Logger } from "@/data/protocols/utils";
import { Middleware, HttpRequest } from "@/presentation/protocols";
import {
  badRequest,
  serverError,
  notFound,
  unprocessableEntity,
} from "@/presentation/utils/http-response";
import { DICTIONARY } from "@/util";

export class CreateContactMiddleware implements Middleware {
  constructor(
    private readonly createContact: CreateContact,
    private readonly getDataSheets: GetDataSheets,
    private readonly logger: Logger
  ) {}

  async handle(
    httpRequest: HttpRequest,
    [, setState]: Middleware.State,
    next: Function
  ): Middleware.Result {
    try {
      const dataSheets = await this.getDataSheets.get();

      const contacts = await this.createContact.create(dataSheets.values);

      setState({ contacts });

      return next();
    } catch (error) {
      this.logger.log(error);
      switch (error.message) {
        case "CONTACTS_ERROR":
          return notFound(DICTIONARY.RESPONSE.MESSAGE.NOT_FOUND);
        case "CREATE_ERROR":
          return unprocessableEntity(DICTIONARY.RESPONSE.MESSAGE.UNPROCESSABLE);
        default:
          return serverError(error);
      }
    }
  }
}
