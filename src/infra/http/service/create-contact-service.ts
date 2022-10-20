import {
  CreateContactService as CreateContactServiceProtocol,
  HttpClient,
} from "@/data/protocols/http";
import { convertSnakeCaseKeysToCamelCase, TOKEN, APIS } from "@/util";

export class CreateContactService implements CreateContactServiceProtocol {
  constructor(private readonly httpClient: HttpClient) {}

  async post(
    params: CreateContactServiceProtocol.Params
  ): CreateContactServiceProtocol.Result {
    const response = await this.httpClient.request({
      method: "POST",
      url: "objects/contacts/batch/create",
      headers: {
        Authorization: `Bearer ${TOKEN.ACCESS_TOKEN_HUBSPOT}`,
      },
      body: {
        inputs: params,
      },
    });
    if (response.statusCode > 300 || !response.body) return null;

    return convertSnakeCaseKeysToCamelCase(response.body.results);
  }
}
