import { Router } from "express";

import { scheduleCreateController } from "../controllers/schedules/scheduleCreate.controller";
import { scheduleListPropertyController } from "../controllers/schedules/scheduleListProperty.controller";

import { authUserMiddleware } from "../middlewares/authUser.middleware";

const routes = Router();

export const scheduleRoutes = () => {
  routes.post("/", authUserMiddleware, scheduleCreateController);
  routes.get(
    "/properties/:id",
    authUserMiddleware,
    scheduleListPropertyController
  );

  return routes;
};
