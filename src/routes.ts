import { Express, Request, Response } from "express";
import { createExampleHandler } from "./controller/example.controller";
import validateResource from "./middleware/validateResource";
import { createExampleSchema } from "./schema/example.schema";

function routes(app: Express) {
  app.get("/health", (req: Request, res: Response) => res.sendStatus(200));

  app.post(
    "/api/example",
    validateResource(createExampleSchema),
    createExampleHandler
  );
}

export default routes;
