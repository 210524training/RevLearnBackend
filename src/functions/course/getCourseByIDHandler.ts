import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';

import { middyfy } from '../../libs/lambda';

// import courseService from '../../services/course.service';

const getCourseByIDHandler: ValidatedEventAPIGatewayProxyEvent<unknown> = async (event) => {
  const id = event.path.split('/').pop();
  
};

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(getCourseByIDHandler);
