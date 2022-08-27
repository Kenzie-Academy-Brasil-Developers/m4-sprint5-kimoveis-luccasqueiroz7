import { Request, Response } from "express";
import { categoryListService } from "../../services/categories/categoryList.service";

export const categoryListController = async (req: Request, res: Response) => {
  const categories = await categoryListService();

  return res.status(200).json(categories);
};
