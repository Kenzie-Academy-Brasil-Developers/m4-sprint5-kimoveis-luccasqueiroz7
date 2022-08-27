import { Express } from "express";

import { categoryRoutes } from "./category.routes";
import { loginRoutes } from "./login.routes";
import { propertyRoutes } from "./property.routes";
import { scheduleRoutes } from "./schedule.routes";
import { userRoutes } from "./user.routes";

export const AppRoutes = (app: Express) => {
  app.use("/users", userRoutes());
  app.use("/login", loginRoutes());
  app.use("/categories", categoryRoutes());
  app.use("/properties", propertyRoutes());
  app.use("/schedules", scheduleRoutes());
};
