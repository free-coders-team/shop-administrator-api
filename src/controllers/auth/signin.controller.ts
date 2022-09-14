import "../../firebase";

import { ControllerBase } from "../../../src/utils/controller";

import axios from "axios";
import { constants } from "../../../src/config/constants";
import { ERROR_CODE_INCORRECT_CREDENTIALS } from "../../../src/utils/exception-code-responses";
import { generateToken } from "../../../src/utils/token";
import { ApiGiogleAuthResponse } from "src/types/api-google-auth-response";

type PayloadType = {
  token: string;
};

type RequestBody = {
  email: string;
  password: string;
};

const signin = ControllerBase<PayloadType>(async (req, res) => {
  const { email, password } = req.body as RequestBody;

  try {
    const userRaw = await axios.post(constants.authApiUrl, {
      email: email,
      password: password,
      returnSecureToken: true,
    });

    const userData: ApiGiogleAuthResponse = userRaw.data;

    const token = generateToken({
      uid: userData.localId,
    });

    return {
      code: 200,
      message: "Usuario Registrado",
      payload: { token: token! },
    };
  } catch (error: any) {
    console.log(error.message);
    return ERROR_CODE_INCORRECT_CREDENTIALS;
  }
});

export default signin;
