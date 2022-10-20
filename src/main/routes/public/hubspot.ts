import { Route } from "@/infra/http/utils/http-server";
import { makeCreateContactController } from "@/main/factories/controllers";
import { makeCreateContactMiddleware } from "@/main/factories/middlewares";

export default function (route: Route) {
  route.post(
    "/hubspot",
    makeCreateContactMiddleware(),
    makeCreateContactController()
  );
}
