import { Request, Response } from "express";
import { ResponseStatus } from "./response-status";
import { AuthRequest } from "./middleware";

export type ResponseRequest<T> = ResponseStatus & { payload?: T };

export type RequestCallback<T> = (
  req: AuthRequest,
  res: Response
) => Promise<ResponseRequest<T>>;
