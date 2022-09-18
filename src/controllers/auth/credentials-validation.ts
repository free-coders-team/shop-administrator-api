import "../../config/firebase";

import { generateToken } from "../../utils/token";
import { ControllerBase } from "../../utils/controller";
import {
  ERROR_CODE_GENERATE_TOKEN,
  ERROR_CODE_INCORRECT_CREDENTIALS,
  ERROR_CODE_NO_DATA_PROVIDED
} from "../../utils/response-error-codes"


import AuthUser from "../../services/AuthUser";

type PayloadType = {
  token: string;
};

type RequestBody = {
  email: string;
  password: string;
};

const credentialsValidation = ControllerBase<PayloadType>(async (req) => {
  const { email, password } = req.body as RequestBody;

  if (!email || !password) return ERROR_CODE_NO_DATA_PROVIDED;

  const user = await AuthUser({ email, password });

  if (!user) return ERROR_CODE_INCORRECT_CREDENTIALS;

  const token = generateToken({
    uid: user.uid,
    email: user.email,
  });

  if (!token) return ERROR_CODE_GENERATE_TOKEN;

  return {
    code: 200,
    payload: { token: token },
    message: "Usuario validado",
  };
});

export default credentialsValidation;
