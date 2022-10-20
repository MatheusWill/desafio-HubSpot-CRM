import { Controller, HttpRequest } from "@/presentation/protocols";
import { ok } from "@/presentation/utils";
import { DICTIONARY } from "@/util";

export class CreateContactController implements Controller {
  async handle(
    httpRequest: HttpRequest,
    [{ contacts }]: Controller.State
  ): Controller.Result {
    return ok(DICTIONARY.RESPONSE.MESSAGE.OK, {
      contacts,
    });
  }
}
