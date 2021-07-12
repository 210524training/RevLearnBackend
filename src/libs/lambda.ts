/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import middy from '@middy/core';
import middyJsonBodyParser from '@middy/http-json-body-parser';
import { ValidatedEventAPIGatewayProxyEvent } from './apiGateway';

export const middyfy = (handler: ValidatedEventAPIGatewayProxyEvent<{ readonly type: 'object'; readonly properties: { readonly name: { readonly type: 'string'; }; }; readonly required: readonly ['name']; }>) => {
  return middy(handler).use(middyJsonBodyParser());
};
