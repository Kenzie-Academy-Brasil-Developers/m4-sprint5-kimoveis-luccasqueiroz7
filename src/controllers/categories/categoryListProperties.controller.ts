import { Request, Response } from "express";
import { categoryListPropertiesService } from "../../services/categories/categoryListProperties.service";

export const categoryListPropertiesController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const listProperties = await categoryListPropertiesService(id);

  return res.status(200).json(listProperties);
};
