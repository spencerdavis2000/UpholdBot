/**
 * Place we can keep the GET and POST endpoints
 */

 import express from 'express';
 const router = express.Router();
 
 import { defaultRoute } from './controllers/defaultRoute';
 import { getTickerInfo } from './controllers/getTickerInfo';
 import { alertPriceOscillation } from './controllers/alertPriceOscillation';

 router.get('/api/getTickerInfo', getTickerInfo);
 router.all('*', defaultRoute);
 router.get('/alertPriceOscillation', alertPriceOscillation);
 export default router;

