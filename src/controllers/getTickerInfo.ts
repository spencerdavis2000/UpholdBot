import { Request, Response } from 'express';

export function getTickerInfo(_req: Request, res: Response): void {
  console.log(`{"unknown_route": "${_req.url}"}`);
  res.sendStatus(403);
}