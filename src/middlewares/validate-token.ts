import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { ControllerMiddlewareBase } from "../utils/middleware"
import { ERROR_CODE_TOKEN_INVALID } from '../utils/exception-code-responses';

const validateTokenMiddleware = ControllerMiddlewareBase(
  async (req, res, next) => {
    const { authorization } = req.headers
    const isValidToken = jwt.verify(authorization as string, process.env.JWT_SECRET as string)
    if (isValidToken) {
      return next()
    }

    next()
    // return ERROR_TOKEN_INVALID
    // return ''
  }
)

export default validateTokenMiddleware