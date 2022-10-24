import { Route } from "@/infra/http/utils/http-server";
import { makeCreateContactController } from "@/main/factories/controllers";
import { makeCreateContactMiddleware } from "@/main/factories/middlewares";
import { validationMiddlewareAdapter } from "@/main/adapters";
import { createDefaultSchema } from "@/validation/default";

export default function (route: Route) {
  route.post(
    "/hubspot",
    validationMiddlewareAdapter(createDefaultSchema),
    makeCreateContactMiddleware(),
    makeCreateContactController()
  );
}
