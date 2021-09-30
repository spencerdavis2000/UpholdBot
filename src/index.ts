import app from './app';
import serverless from 'serverless-http';

const handler = serverless(app);
module.exports.handler = async (event: any, context: any): Promise<any> => {
  const result = await handler(event, context);
  return result;
};