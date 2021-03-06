import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';
import { formatJSONResponse } from '../../libs/apiGateway';
import { middyfy } from '../../libs/lambda';
import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => formatJSONResponse(200, {
  message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
  event,
});

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(hello);
