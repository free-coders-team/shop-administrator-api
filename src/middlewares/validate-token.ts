import { ControllerMiddlewareBase } from "../utils/middleware"
import jwt from 'jsonwebtoken'
import { ERROR_CODE_TOKEN_INVALID } from '../utils/exception-code-responses';

const validateTokenMiddleware = ControllerMiddlewareBase(
  async (req, res, next) => {
    const { authorization } = req.headers
    console.log('')
    const isValidToken = jwt.verify(authorization as string, process.env.JWT_SECRET as string)
    if (isValidToken) {
      return next()
    }

    next()
  }
)

export default validateTokenMiddleware