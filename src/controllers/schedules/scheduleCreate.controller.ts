import { Request, Response } from "express";
import { scheduleCreateService } from "../../services/schedules/scheduleCreate.service";

export const scheduleCreateController = async (req: Request, res: Response) => {
  const { date, hour, propertyId } = req.body;
  const { userId } = req;

  await scheduleCreateService({
    date,
    hour,
    propertyId,
    userId,
  });

  return res.status(201).json({ message: "scheduled time" });
};
