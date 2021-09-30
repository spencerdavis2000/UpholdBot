import { alertPriceOscillation } from '../../controllers/alertPriceOscillation';
import { Request, Response } from 'express';

let req: Request;
let res: Response;

/**
create a mock scope object
*/
describe('alertPriceOscillation', () => {
  beforeEach(() => {
    req = {
      path: 'testUrl',
    } as unknown as Request;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;
  });

  afterEach(() => {
    jest.fn().mockReset();
  });

  it('should successfully invoke alertPriceOscillation', async () => {
    await alertPriceOscillation(req, res);
    expect(res.json).toHaveBeenCalledWith({ name: 'Alert Price Oscillation!' });
  });
});
