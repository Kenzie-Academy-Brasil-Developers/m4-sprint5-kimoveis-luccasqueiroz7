import { Request, Response } from "express";
import { userListService } from "../../services/users/userList.service";

export const userListController = async (req: Request, res: Response) => {
  const { userIsAdm } = req;

  const users = await userListService(userIsAdm);

  return res.status(201).json(users);
};
