import { Request, Response } from "express";
import { RequestCallback } from "src/types/controller";

export const ControllerBase = <T extends object>(callback: RequestCallback<T>) => {
  return async (req: Request, res: Response) => {
    const { code, message, payload } = await callback(req, res);

    return res.status(code).json({
      code,
      message,
      payload,
    });
  };
};
