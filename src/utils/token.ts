import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { UserToken } from "../types/token";

dotenv.config();

export const generateToken = (payload: UserToken) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) return null;
  const token = jwt.sign(payload, process.env.JWT_SECRET as string);
  return token;
};

export const decodeToken = (token: string) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) return null;
  const data = jwt.decode(token);
  return data;
};

export const verifyToken = (token: string) => {
  try {
    const secret = process.env.JWT_SECRET || ''
    const userData = jwt.verify(token, secret)
    return userData
  } catch (error) {
    return null
  }
}