import dotenv from "dotenv";

dotenv.config();

export const NODE_PORT = process.env.PORT || 4000;

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "";

export const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY || "";
export const FIREBASE_CLIENT_ID = process.env.FIREBASE_CLIENT_ID || "";
export const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID || "";
export const FIREBASE_PRIVATE_KEY_ID = process.env.FIREBASE_PRIVATE_KEY_ID || "";
