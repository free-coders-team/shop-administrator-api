import { NextFunction, Request, Response } from 'express'
import { ResponseStatus } from '../types/response-status'

export type ResponseMiddlewareRequest = ResponseStatus | void

export type RequestMiddlewareCallback = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<ResponseMiddlewareRequest>