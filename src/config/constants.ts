import { FIREBASE_API_KEY } from "./enviroment";

export const AUTH_API_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;
