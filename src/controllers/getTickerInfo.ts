import { Request, Response } from 'express';

export function getTickerInfo(_req: Request, res: Response): void {
  console.log(`{"getTickerInfo": "${_req.url}"}`);
  res.status(200).json({ name: 'Get Ticket Info!' });
}
