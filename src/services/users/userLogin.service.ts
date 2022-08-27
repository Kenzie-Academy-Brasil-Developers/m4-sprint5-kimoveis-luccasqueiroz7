import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import { IUserLogin } from "../../interfaces/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../entities/user.entity";

export const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.email === email);
  const correctPassword = bcrypt.compareSync(password, account!.password);

  if (!account || !correctPassword) {
    throw new AppError(403, "Wrong email/password");
  }

  if (!account.isActive) {
    throw new AppError(400, "user is not activated");
  }

  const token = jwt.sign(
    { email: email, isAdm: account.isAdm, userId: account.id },
    String(process.env.SECRET_KEY),
    {
      expiresIn: "1d",
    }
  );

  return token;
};
