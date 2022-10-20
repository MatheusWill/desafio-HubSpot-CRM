import { HttpCreateContact, HttpGetSheets } from "@/data/usecases/http";
import { httpHubSpot, CreateContactService } from "@/infra/http/service";
import { RequestAdapter } from "@/infra/http/adapters";
import { CreateContactMiddleware } from "@/presentation/middlewares";
import { logger } from "@/util/";

export const makeCreateContactMiddleware = () => {
  const requestAdapter = new RequestAdapter(httpHubSpot);

  const createContactService = new CreateContactService(requestAdapter);

  const httpGetSheets = new HttpGetSheets();

  const httpCreateContact = new HttpCreateContact(createContactService);

  return new CreateContactMiddleware(httpCreateContact, httpGetSheets, logger);
};
