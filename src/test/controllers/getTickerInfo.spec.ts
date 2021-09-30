import { getTickerInfo } from '../../controllers/getTickerInfo';
import { Request, Response } from 'express';

let req: Request;
let res: Response;

/**
create a mock scope object
*/
describe('getTickerInfo', () => {
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

  it('should successfully invoke getTickerInfo', async () => {
    await getTickerInfo(req, res);
    expect(res.json).toHaveBeenCalledWith({ name: 'Get Ticket Info!' });
  });
});
