import AppDataSource from "../../data-source";
import { Category } from "../../entities/category.entity";
import { AppError } from "../../errors/AppError";

export const categoryListPropertiesService = async (id: string) => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const category = await categoryRepository.findOneBy({ id });

  if (!category) {
    throw new AppError(404, "Invalid id");
  }

  return category;
};
