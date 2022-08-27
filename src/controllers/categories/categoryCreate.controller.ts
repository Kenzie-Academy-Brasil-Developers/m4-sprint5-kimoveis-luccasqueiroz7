import { Request, Response } from "express";
import { categoryCreateService } from "../../services/categories/categoryCreate.service";

export const categoryCreateController = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { userIsAdm } = req;

  const newCategory = await categoryCreateService({ name }, userIsAdm);

  return res.status(201).json(newCategory);
};
