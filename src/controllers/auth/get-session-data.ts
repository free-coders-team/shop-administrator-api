import { ControllerBase } from "../../utils/controller";
import { ERROR_CODE_NOT_FOUND_USER } from "../../utils/response-error-codes";

import { UserToken } from "../../types/token";
import GetUserByEmail from "../../services/GetUserByEmail";

type PayloadType = {
  user: {
    uid: string;
    email: string;
  }
}

const getSessionData = ControllerBase<PayloadType>(async (req) => {
  const { email } = req.user as UserToken

  const user = await GetUserByEmail({ email });

  if (!user) return ERROR_CODE_NOT_FOUND_USER;

  return {
    code: 200,
    message: "Token valido",
    payload: {
      user: {
        uid: user.uid,
        email: user.email,
      }
    }
  }
})

export default getSessionData;
