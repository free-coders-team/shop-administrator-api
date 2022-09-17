import { enviroments } from "./enviroment";

export const constants = {
  authApiUrl:
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
    enviroments.firebase.api_key,
};
