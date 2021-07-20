import 'source-map-support/register';

import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';

import { middyfy } from '../../libs/lambda';

import userService from '../../services/user.service';

const getAllTeachersHandler: ValidatedEventAPIGatewayProxyEvent<unknown> = async () => {
  const users = await userService.getAllTeachers();

  return formatJSONResponse(users ? 200 : 204, users);
};

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(getAllTeachersHandler);
