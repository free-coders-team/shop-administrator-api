import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { UserToken } from "../types/token";
import { JWT_SECRET_KEY } from "../config/enviroment";
import { TokenExpiresTime } from "../config/constants";

dotenv.config();

export const generateToken = (payload: UserToken) => {
  const token = jwt.sign(payload, JWT_SECRET_KEY as string, {
    expiresIn: TokenExpiresTime,
  });
  return token;
};

export const decodeToken = (token: string) => {
  const data = jwt.decode(token);
  return data;
};

export const verifyToken = (token: string) => {
  try {
    const userData = jwt.verify(token, JWT_SECRET_KEY);
    return userData;
  } catch (error) {
    return null;
  }
};
