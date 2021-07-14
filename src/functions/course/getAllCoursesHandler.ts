import 'source-map-support/register';

import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';

import { middyfy } from '../../libs/lambda';

import courseService from '../../services/course.service';

const getCoursesHandler: ValidatedEventAPIGatewayProxyEvent<unknown> = async () => {
  const courses = await courseService.getAll();

  return formatJSONResponse(courses[0] ? 200 : 204, courses);
};

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(getCoursesHandler);
