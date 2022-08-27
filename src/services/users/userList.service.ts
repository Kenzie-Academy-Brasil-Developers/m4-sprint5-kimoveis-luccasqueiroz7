import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

export const userListService = async (userIsAdm: boolean) => {
  const userRepository = AppDataSource.getRepository(User);

  if (!userIsAdm) {
    throw new AppError(403, "user is not administrator");
  }

  const users = await userRepository.find();

  return users;
};
