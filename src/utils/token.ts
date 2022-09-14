import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

export const generateToken = (payload: any) => {
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
