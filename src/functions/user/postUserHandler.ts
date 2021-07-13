import 'source-map-support/register';

import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';

import { middyfy } from '../../libs/lambda';
import { postUserSchema } from './schema';

import userService from '../../services/user.service';
import User from '../../models/User';

const postUser: ValidatedEventAPIGatewayProxyEvent<typeof postUserSchema> = async (event) => {
  const user: User = event.body as User;

  const result: boolean = await userService.addUser(user);

  return formatJSONResponse(result ? 201 : 500, result);
};

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(postUser);
