import { NextFunction, Request, Response } from "express"
import { RequestMiddlewareCallback } from "../types/middleware"

export const ControllerMiddlewareBase = (callback: RequestMiddlewareCallback) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const response = await callback(req, res, next)
    return response
  }
}
