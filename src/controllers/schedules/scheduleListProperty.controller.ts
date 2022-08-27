import { Request, Response } from "express";
import { scheduleListPropertyService } from "../../services/schedules/scheduleListProperty.service";

export const scheduleListPropertyController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const { userIsAdm } = req;

  const schedules = await scheduleListPropertyService(id, userIsAdm);

  return res.status(200).json(schedules);
};
