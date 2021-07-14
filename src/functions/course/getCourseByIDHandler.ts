import 'source-map-support/register';

import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';

import { middyfy } from '../../libs/lambda';

import courseService from '../../services/course.service';

const getCourseByIDHandler: ValidatedEventAPIGatewayProxyEvent<unknown> = async (event) => {
  const id = event.path.split('/').pop();

  const course = await courseService.getCourseByID(id);
  return formatJSONResponse(course ? 200 : 204, course);
};

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(getCourseByIDHandler);
