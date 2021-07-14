import 'source-map-support/register';

import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';

import { middyfy } from '../../libs/lambda';

import courseService from '../../services/course.service';

const updateCoursesHandler: ValidatedEventAPIGatewayProxyEvent<unknown> = async (event) => {
  const id = event.path.split('/').pop();

  const result: boolean = await courseService.deleteCourse(id);

  return formatJSONResponse(result ? 200 : 500, result);
};

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(updateCoursesHandler);
