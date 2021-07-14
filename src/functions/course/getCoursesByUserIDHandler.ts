import 'source-map-support/register';

import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';

import { middyfy } from '../../libs/lambda';

import courseService from '../../services/course.service';

const getCoursesByUserIDHandler: ValidatedEventAPIGatewayProxyEvent<unknown> = async (event) => {
  const userID = event.path.split('/').pop();

  const courses = courseService.getUserCourses(userID);
  return formatJSONResponse(courses[0] ? 200 : 204, courses);
};

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(getCoursesByUserIDHandler);
