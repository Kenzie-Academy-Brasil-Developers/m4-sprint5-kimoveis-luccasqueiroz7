import { Request, Response } from "express";
import { userSoftDeleteService } from "../../services/users/userSoftDelete.service";

export const userSoftDeleteController = async (req: Request, res: Response) => {
  const { userIsAdm } = req;
  const { id } = req.params;

  await userSoftDeleteService(id, userIsAdm);

  return res.status(204).json({ message: "deleted user" });
};
