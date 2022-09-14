import { ControllerMiddlewareBase } from "../utils/middleware"
import jwt from 'jsonwebtoken'
import { ERROR_CODE_TOKEN_INVALID, ERROR_CODE_NOT_AUTHORIZATION, ERROR_CODE_INCORRECT_FORMAT_TOKEN } from '../utils/exception-code-responses';
import { UserToken } from "../types/token";

const validateTokenMiddleware = ControllerMiddlewareBase(
  async (req, res, next) => {
    const { authorization } = req.headers
    console.log('')

    if (authorization) {
      const [bearer, token] = authorization.toString().split(' ')
      console.log(token)
      const isValidToken = jwt.verify(token as string, process.env.JWT_SECRET as string)
      console.log(isValidToken)

      req.user = isValidToken as UserToken
      return next()
    }

    return ERROR_CODE_INCORRECT_FORMAT_TOKEN
  }
)

export default validateTokenMiddleware