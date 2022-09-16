import { ControllerMiddlewareBase } from "../utils/middleware"
import jwt from 'jsonwebtoken'
import { ERROR_CODE_TOKEN_INVALID, ERROR_CODE_NOT_AUTHORIZATION } from '../utils/exception-code-responses';
import { verifyToken } from "../utils/token";
import { UserToken } from "../types/token";

const validateTokenMiddleware = ControllerMiddlewareBase(
  async (req, res, next) => {
    const { authorization } = req.headers
    console.log(authorization)
    if (!authorization) return ERROR_CODE_NOT_AUTHORIZATION 
    const [_, token] = authorization.split(' ')
    const user = verifyToken(token)
    if (!user) return ERROR_CODE_TOKEN_INVALID
    req.user = user as UserToken
    next()
  }
)

export default validateTokenMiddleware