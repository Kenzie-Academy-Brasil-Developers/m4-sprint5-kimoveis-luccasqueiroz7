import { Request, Response } from "express";
import { userCreateService } from "../../services/users/userCreate.service";
import "express-async-errors";
import { instanceToPlain } from "class-transformer";

export const userCreateController = async (req: Request, res: Response) => {
  const { name, email, password, isAdm } = req.body;

  const newUser = await userCreateService({ name, email, password, isAdm });

  return res.status(201).json(instanceToPlain(newUser));
};
