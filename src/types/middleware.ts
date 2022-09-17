import { NextFunction, Request, Response } from 'express'

import { ResponseStatus } from '../types/response-status'

import { UserToken } from './token'

export type ResponseMiddlewareRequest = ResponseStatus | void

export interface AuthRequest extends Request {
  user?: UserToken
}

export type RequestMiddlewareCallback = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => Promise<ResponseMiddlewareRequest>