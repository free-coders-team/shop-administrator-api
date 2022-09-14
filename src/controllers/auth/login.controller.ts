import "../../firebase";

import { ControllerBase } from "../../../src/utils/controller";

import {
  ERROR_CODE_GENERATE_TOKEN,
  ERROR_CODE_INCORRECT_CREDENTIALS,
  ERROR_CODE_NO_DATA_PROVIDED,
} from "../../../src/utils/exception-code-responses";
import { generateToken } from "../../../src/utils/token";

import AuthUser from "src/services/AuthUser";

type PayloadType = {
  token: string;
};

type RequestBody = {
  email: string;
  password: string;
};

const login = ControllerBase<PayloadType>(async (req, res) => {
  const { email, password } = req.body as RequestBody;

  if (!email || !password) return ERROR_CODE_NO_DATA_PROVIDED;

  try {
    const user = await AuthUser({ email, password });

    if (!user) return ERROR_CODE_INCORRECT_CREDENTIALS;

    const token = generateToken({
      uid: user.uid,
      email: user.email,
    });

    if (!token) return ERROR_CODE_GENERATE_TOKEN;

    return {
      code: 200,
      message: "Usuario validado",
      payload: { token: token },
    };
  } catch (error) {
    console.log((error as Error).message);
    return ERROR_CODE_INCORRECT_CREDENTIALS;
  }
});

export default login;
