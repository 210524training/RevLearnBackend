import 'source-map-support/register';

import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';

import { middyfy } from '../../libs/lambda';

import userService from '../../services/user.service';

const getAllUsersHandler: ValidatedEventAPIGatewayProxyEvent<unknown> = async () => {
  const users = userService.getAll();

  return formatJSONResponse(users[0] ? 200 : 204, users);
};

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(getAllUsersHandler);
