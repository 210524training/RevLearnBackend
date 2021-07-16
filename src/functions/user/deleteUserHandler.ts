import 'source-map-support/register';

import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';

import { middyfy } from '../../libs/lambda';

import userService from '../../services/user.service';

const deleteUserHandler: ValidatedEventAPIGatewayProxyEvent<unknown> = async (event) => {
  const id = event.path.split('/').pop();

  const result: boolean = await userService.deleteUser(id);

  return formatJSONResponse(result ? 200 : 500, result);
};

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(deleteUserHandler);
