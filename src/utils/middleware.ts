import { NextFunction, Request, Response } from "express"

import { RequestMiddlewareCallback } from "../types/middleware"
import { ResponseStatus } from "../types/response-status"

export const ControllerMiddlewareBase = (callback: RequestMiddlewareCallback) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const response = await callback(req, res, next) as ResponseStatus
    if (response) {
      return res.status(response.code).json({
        code: response.code,
        message: response.message
      })
    }
  }
}
