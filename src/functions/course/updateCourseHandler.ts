import 'source-map-support/register';

import Course from '../../models/Course';
import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';

import { middyfy } from '../../libs/lambda';
import { postCourseSchema } from './schema';

import courseService from '../../services/course.service';

const updateCoursesHandler: ValidatedEventAPIGatewayProxyEvent<typeof postCourseSchema> = async (event) => {
  const course: Course = event.body as Course;

  const result: boolean = await courseService.updateCourse(course);

  return formatJSONResponse(result ? 201 : 500, result);
};

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(updateCoursesHandler);
