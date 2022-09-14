import axios from "axios";

import { ApiGiogleAuthResponse } from "../types/api-google-auth-response";
import { constants } from "../config/constants";

type AuthUserParams = {
  email: string;
  password: string;
};

const AuthUser = async (params: AuthUserParams) => {
  try {
    const userRaw = await axios.post(constants.authApiUrl, {
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
