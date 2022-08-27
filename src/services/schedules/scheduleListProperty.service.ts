import AppDataSource from "../../data-source";
import { Property } from "../../entities/property.entity";
import { Schedule } from "../../entities/schedule.entity";
import { AppError } from "../../errors/AppError";

export const scheduleListPropertyService = async (
  id: string,
  userIsAdm: boolean
) => {
  const propertyRepository = AppDataSource.getRepository(Property);

  const propertyInvalidId = await propertyRepository.findOneBy({ id });

  if (!propertyInvalidId) {
    throw new AppError(404, "Invalid id");
  }

  if (!userIsAdm) {
    throw new AppError(403, "user is not administrator");
  }

  const schedules = await propertyRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      schedules: true,
    },
  });

  return schedules;
};
