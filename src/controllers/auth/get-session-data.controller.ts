import { ControllerBase } from "../../utils/controller";
import { ERROR_CODE_TOKEN_INVALID } from "../../utils/exception-code-responses";
import { decodeToken } from "../../utils/token";
import { JwtPayload } from "jsonwebtoken";
import GetUserByEmail from "src/services/GetUserByEmail";

type PayloadType = {
  user: {
    uid: string;
    email: string;
  };
};

type RequestBody = {
  token: string;
};

const getSessionData = ControllerBase<PayloadType>(async (req, res) => {
  const { token } = req.body as RequestBody;

  try {
    if (!token) return ERROR_CODE_TOKEN_INVALID;

    const data = decodeToken(token) as JwtPayload;

    const user = await GetUserByEmail({ email: data.email });

    if (user === null) return ERROR_CODE_TOKEN_INVALID;

    return {
      code: 200,
      message: "Token valido",
      payload: {
        user: {
          uid: user.uid,
          email: user.email,
        },
      },
    };
  } catch (error: any) {
    console.log(error.message);
    return ERROR_CODE_TOKEN_INVALID;
  }
});

export default getSessionData;
