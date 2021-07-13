import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';

import { middyfy } from '../../libs/lambda';

import userService from '../../services/user.service';

const getAllUsers: ValidatedEventAPIGatewayProxyEvent<unknown> = async () => {
  const users = userService.getAll();

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
    },
    body: JSON.stringify(users),
  };

  return response;
};

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(getAllUsers);
