import { Router } from "express";

import { userCreateController } from "../controllers/users/userCreate.controller";
import { userListController } from "../controllers/users/userList.controller";
import { userSoftDeleteController } from "../controllers/users/userSoftDelete.controller";

import { authUserMiddleware } from "../middlewares/authUser.middleware";

const routes = Router();

export const userRoutes = () => {
  routes.post("/", userCreateController);
  routes.get("/", authUserMiddleware, userListController);
  routes.delete("/:id", authUserMiddleware, userSoftDeleteController);

  return routes;
};
