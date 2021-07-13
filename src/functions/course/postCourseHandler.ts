import 'source-map-support/register';

import Course from '../../models/Course';
import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';

import { middyfy } from '../../libs/lambda';
import { postCourseSchema } from './schema';

import courseService from '../../services/course.service';

const postCoursesHandler: ValidatedEventAPIGatewayProxyEvent<typeof postCourseSchema> = async (event) => {
  const course: Course = event.body as Course;

  courseService.addCourse(course);

  const response = {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
    },
    body: JSON.stringify(course),
  };

  return response;
};

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(postCoursesHandler);
