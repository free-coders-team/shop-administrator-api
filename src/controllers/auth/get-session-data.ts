import { ControllerBase } from "../../utils/controller";
import { ERROR_CODE_NOT_FOUND_USER } from "../../utils/response-error-codes";

import { UserToken } from "../../types/token";
import GetUserByUID from "../../services/GetUserByUID";

type PayloadType = {
  user: {
    uid: string;
    email: string;
  };
};

const getSessionData = ControllerBase<PayloadType>(async (req) => {
  const { uid } = req.user as UserToken;

  const user = await GetUserByUID({ uid });

  if (!user) return ERROR_CODE_NOT_FOUND_USER;

  return {
    code: 200,
    message: "Token valido",
    payload: {
      user,
    },
  };
});

export default getSessionData;
