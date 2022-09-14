import { Request, Response } from "express";
import { ResponseStatus } from "./response-status";

export type ResponseRequest<T> = ResponseStatus & { payload?: T };

export type RequestCallback<T> = (
  req: Request,
  res: Response
) => Promise<ResponseRequest<T>>;
