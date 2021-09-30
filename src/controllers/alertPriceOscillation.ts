import { Request, Response } from 'express';

export function alertPriceOscillation(_req: Request, res: Response): void {
  console.log(`{"alertPriceOscillation": "${_req.url}"}`);
  res.status(200).json({ name: 'Alert Price Oscillation!' });
}
