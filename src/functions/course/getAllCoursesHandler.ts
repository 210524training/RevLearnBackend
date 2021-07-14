import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';

import { middyfy } from '../../libs/lambda';

import courseService from '../../services/course.service';

const getCoursesHandler: ValidatedEventAPIGatewayProxyEvent<unknown> = async () => {
  const courses = await courseService.getAll();

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
    },
    body: JSON.stringify(courses),
  };

  return response;
};

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(getCoursesHandler);
