import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

export const userSoftDeleteService = async (id: string, userIsAdm: boolean) => {
  const userRepository = AppDataSource.getRepository(User);

  if (!userIsAdm) {
    throw new AppError(403, "user is not administrator");
  }

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError(404, "Invalid Id");
  }

  if (!user?.isActive) {
    throw new AppError(400, "user is already deactivated");
  }

  await userRepository.update(id, { isActive: false });

  return;
};
