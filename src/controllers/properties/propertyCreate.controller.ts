import { Request, Response } from "express";
import { IPropertyRequest } from "../../interfaces/properties";
import { propertyCreateService } from "../../services/properties/propertyCreate.service";

export const propertyCreateController = async (req: Request, res: Response) => {
  const { value, size, categoryId, address }: IPropertyRequest = req.body;
  const { userIsAdm } = req;

  const newProperty = await propertyCreateService(
    { value, size, categoryId, address },
    userIsAdm
  );

  return res.status(201).json(newProperty);
};
