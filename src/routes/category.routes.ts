import { Router } from "express";

import { categoryCreateController } from "../controllers/categories/categoryCreate.controller";
import { categoryListController } from "../controllers/categories/categoryList.controller";
import { categoryListPropertiesController } from "../controllers/categories/categoryListProperties.controller";

import { authUserMiddleware } from "../middlewares/authUser.middleware";

const routes = Router();

export const categoryRoutes = () => {
  routes.post("/", authUserMiddleware, categoryCreateController);
  routes.get("/", categoryListController);
  routes.get("/:id/properties", categoryListPropertiesController);

  return routes;
};
