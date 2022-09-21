import axios from "axios";

import { AUTH_API_URL } from "../config/constants";
import { ApiGiogleAuthResponse } from "../types/api-google-auth-response";

type AuthUserParams = {
  email: string;
  password: string;
};

const AuthUser = async (params: AuthUserParams) => {
  try {
    const userRaw = await axios.post(AUTH_API_URL, {
      email: params.email,
      password: params.password,
      returnSecureToken: true,
    });

    const userData: ApiGiogleAuthResponse = userRaw.data;

    return {
      uid: userData.localId,
      email: userData.email,
    };
  } catch (error) {
    return null;
  }
};

export default AuthUser;
