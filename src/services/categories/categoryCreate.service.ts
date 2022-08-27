import AppDataSource from "../../data-source";
import { Category } from "../../entities/category.entity";
import { AppError } from "../../errors/AppError";
import { ICategoryRequest } from "../../interfaces/categories";

export const categoryCreateService = async (
  { name }: ICategoryRequest,
  userIsAdm: boolean
) => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const categoryExists = await categoryRepository.findOneBy({ name });

  if (!userIsAdm) {
    throw new AppError(403, "user is not administrator");
  }

  if (categoryExists) {
    throw new AppError(400, "Category already exists");
  }

  const category = new Category();
  category.name = name;

  await categoryRepository.save(category);

  return category;
};
