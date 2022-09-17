import { UserToken } from "../types/token";
import { verifyToken } from "../utils/token";
import { ControllerMiddlewareBase } from "../utils/middleware";
import {
  ERROR_CODE_TOKEN_INVALID,
  ERROR_CODE_NOT_AUTHORIZATION,
} from "../utils/response-error-codes";

const validateTokenMiddleware = ControllerMiddlewareBase(async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return ERROR_CODE_NOT_AUTHORIZATION;
  const authorizationSplit = authorization.split("Bearer ");
  const user = verifyToken(authorizationSplit[1]);
  if (!user) return ERROR_CODE_TOKEN_INVALID;
  req.user = user as UserToken;
  next();
});

export default validateTokenMiddleware;
