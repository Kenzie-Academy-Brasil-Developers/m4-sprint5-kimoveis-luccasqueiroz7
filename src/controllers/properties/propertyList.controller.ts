import { Request, Response } from "express";
import { propertyListService } from "../../services/properties/propertyList.service";

export const propertyListController = async (req: Request, res: Response) => {
  const properties = await propertyListService();

  return res.status(200).json(properties);
};
