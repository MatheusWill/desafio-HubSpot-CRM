import {
  CreateContactService as CreateContactServiceProtocol,
  HttpClient,
} from "@/data/protocols/http";
import {
  convertCamelCaseKeysToSnakeCase,
  convertSnakeCaseKeysToCamelCase,
} from "@/util";

export class CreateContactService implements CreateContactServiceProtocol {
  constructor(private readonly httpClient: HttpClient) {}

  async post(
    params: CreateContactServiceProtocol.Params
  ): CreateContactServiceProtocol.Result {
    const response = await this.httpClient.request({
      method: 'POST',
      url: 'objects/contacts/batch/create',
      headers: {
        authentication: "",
      },
      body: convertCamelCaseKeysToSnakeCase(""),
    });

    if (response.statusCode !== 200 || !response.body) return null;

    return convertSnakeCaseKeysToCamelCase(response.body);
  }
}
