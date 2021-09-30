import { defaultRoute } from '../../controllers/defaultRoute';
import { Request, Response } from 'express';

let req: Request;
let res: Response;

describe('default route', () => {
  beforeEach(() => {
    req = {
      path: 'testUrl',
    } as unknown as Request;
    res = {
      sendStatus: () => {
        return 200;
      },
    } as unknown as Response;
  });

  it('should return 403', async () => {
    res.sendStatus = jest.fn().mockReturnThis();
    await defaultRoute(req, res);
    expect(res.sendStatus).toHaveBeenCalledWith(403);
    jest.fn().mockReset();
  });
});
