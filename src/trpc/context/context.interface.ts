import { Request, Response } from 'express';

export interface IAppContext {
  req: Request;
  res: Response;
}
