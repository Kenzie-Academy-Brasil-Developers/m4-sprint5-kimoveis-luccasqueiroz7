import { Router } from "express";

import { propertyCreateController } from "../controllers/properties/propertyCreate.controller";
import { propertyListController } from "../controllers/properties/propertyList.controller";

import { authUserMiddleware } from "../middlewares/authUser.middleware";

const routes = Router();

export const propertyRoutes = () => {
  routes.post("/", authUserMiddleware, propertyCreateController);
  routes.get("/", propertyListController);

  return routes;
};
