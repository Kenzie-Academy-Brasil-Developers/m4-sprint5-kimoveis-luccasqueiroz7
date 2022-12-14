import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/AppError";

export const authUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    throw new AppError(401, "No token found");
  }

  jwt.verify(
    token as string,
    process.env.SECRET_KEY as string,
    (err: any, decoded: any) => {
      if (err) {
        throw new AppError(401, "Invalid Token");
      }

      req.userEmail = decoded.email;
      req.userIsAdm = decoded.isAdm;
      req.userId = decoded.userId;
      next();
    }
  );
};
