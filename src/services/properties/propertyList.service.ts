import AppDataSource from "../../data-source";
import { Property } from "../../entities/property.entity";

export const propertyListService = async () => {
  const propertyRepository = AppDataSource.getRepository(Property);

  const properties = propertyRepository.find();

  return properties;
};
