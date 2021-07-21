import 'source-map-support/register';
import User from '../../models/User';
import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';

import { middyfy } from '../../libs/lambda';
import { loginSchema } from './schema';

import userService from '../../services/user.service';

const loginHandler: ValidatedEventAPIGatewayProxyEvent<typeof loginSchema> = async (event) => {
  const { username, password } = event.body;

  const result: User | null = await userService.login(username, password);

  return formatJSONResponse(result ? 201 : 500, result);
};

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(loginHandler);
