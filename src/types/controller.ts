import { Request, Response } from 'express'

export type ResponseRequest<T> = {
  payload?: T;
  code: number;
  message: string;
}

export type RequestCallback<T> = (
  req: Request,
  res: Response
) => Promise<ResponseRequest<T>>