import 'source-map-support/register';
import User from '../../models/User';
import userService from '../../services/user.service';

import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';

import { middyfy } from '../../libs/lambda';

const getUserByIDHandler: ValidatedEventAPIGatewayProxyEvent<unknown> = async (event) => {
  const id = event.path.split('/').pop();

  const result: User = await userService.getUserByID(id);

  return formatJSONResponse(result ? 200 : 500, result);
};

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(getUserByIDHandler);
