import "../../firebase";

import { getAuth } from "firebase-admin/auth";

import { ControllerBase } from "../../utils/controller";
import { ERROR_CODE_TOKEN_INVALID } from "../../utils/exception-code-responses";
import { decodeToken } from "../../utils/token";
import { JwtPayload } from "jsonwebtoken";

type PayloadType = {
  user: any;
};

type RequestBody = {
  token: string;
};

const getSessionData = ControllerBase<PayloadType>(async (req, res) => {
  const { token } = req.body as RequestBody;

  try {
    if (!token) return ERROR_CODE_TOKEN_INVALID;

    const data = decodeToken(token) as JwtPayload;

    const auth = getAuth();
    const userData = await auth.getUserByEmail(data.email);

    return {
      code: 200,
      message: "Token valido",
      payload: {
        user: {
          uid: userData.uid,
          email: userData.email,
        },
      },
    };
  } catch (error: any) {
    console.log(error.message);
    return ERROR_CODE_TOKEN_INVALID;
  }
});

export default getSessionData;
