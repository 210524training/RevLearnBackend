import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';

import { middyfy } from '../../libs/lambda';
import {postUserSchema} from './schema';

import userService from '../../services/user.service';
import User from '../../models/User';

const postUser: ValidatedEventAPIGatewayProxyEvent<typeof postUserSchema> = async (event) => {
const user: User = event.body as User;

  userService.addUser(user);

  const response = {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
    },
    body: JSON.stringify(user),
  };

  return response;
};

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(postUser);
