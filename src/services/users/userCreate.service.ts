import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/AppError";
import { IUser, IUserRequest } from "../../interfaces/users";

export const userCreateService = async ({
  name,
  email,
  password,
  isAdm,
}: IUserRequest): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const emailExists = await userRepository.findOneBy({ email });

  if (emailExists) {
    throw new AppError(400, "Email already exists");
  }

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = bcrypt.hashSync(password, 10);
  user.isAdm = isAdm;

  await userRepository.save(user);

  return user;
};
