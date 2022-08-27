import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { Category } from "../../entities/category.entity";
import { Property } from "../../entities/property.entity";
import { AppError } from "../../errors/AppError";
import { IPropertyRequest } from "../../interfaces/properties";

export const propertyCreateService = async (
  { value, size, categoryId, address }: IPropertyRequest,
  userIsAdm: boolean
) => {
  const propertyRepository = AppDataSource.getRepository(Property);
  const addressRepository = AppDataSource.getRepository(Address);
  const categoryRepository = AppDataSource.getRepository(Category);

  if (!userIsAdm) {
    throw new AppError(403, "user is not administrator");
  }

  const categoryInvalidId = await categoryRepository.findOneBy({
    id: categoryId,
  });

  if (!categoryInvalidId) {
    throw new AppError(404, "Invalid id");
  }

  const propertyExists = await propertyRepository.findOneBy({
    address: address,
  });

  if (propertyExists) {
    throw new AppError(400, "Property already exists");
  }

  if (address.state.length > 2) {
    throw new AppError(400, "State with more than 2 digits");
  }

  if (address.zipCode.length > 8) {
    throw new AppError(400, "zip code with more than 8 digits");
  }

  const newAddress = new Address();
  newAddress.city = address.city;
  newAddress.district = address.district;
  newAddress.number = address.number;
  newAddress.state = address.state;
  newAddress.zipCode = address.zipCode;

  await addressRepository.save(newAddress);

  const property = new Property();
  property.value = value;
  property.size = size;
  property.address = newAddress;
  property.category = categoryId;

  await propertyRepository.save(property);

  return property;
};
