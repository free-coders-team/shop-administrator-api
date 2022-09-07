import { Request, Response } from 'express'
import { RequestCallback } from "src/types/controller";

const ControllerBase = <T = {}>(callback: RequestCallback<T>) => {
  return async (req: Request, res: Response) => {
    const { code, message, payload } = await callback(req, res);

    // Falta considerar si la respuesta es un error.
    return res.status(code).json({
      code,
      message,
      payload
    })
  }
}

export default ControllerBase