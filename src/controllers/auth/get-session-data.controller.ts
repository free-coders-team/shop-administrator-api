import "../../firebase";

import { ControllerBase } from "../../utils/controller";

import { ERROR_CODE_TOKEN_INVALID } from "../../utils/exception-code-responses";
import { decodeToken } from "../../utils/token";

type PayloadType = {
  data: any;
};

type RequestBody = {
  token: string;
};

const getSessionData = ControllerBase<PayloadType>(async (req, res) => {
  const { token } = req.body as RequestBody;

  try {
    if (!token) return ERROR_CODE_TOKEN_INVALID;

    const data = decodeToken(token);

    return {
      code: 200,
      message: "Token valido",
      payload: { data: data },
    };
  } catch (error: any) {
    console.log(error.message);
    return ERROR_CODE_TOKEN_INVALID;
  }
});

export default getSessionData;
