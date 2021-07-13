/* eslint-disable import/no-unresolved */
import { handlerPath } from '@libs/handlerResolver';
import { postCourseSchema } from './schema';

export const getAllCourses = {
  handler: `${handlerPath(__dirname)}/getCoursesHandler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'course',
        request: {
          schema: null,
        },
      },
    },
  ],
};

export const postCourse = {
  handler: `${handlerPath(__dirname)}/postCourseHandler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'course',
        request: {
          schema: {
            'application/json': postCourseSchema,
          },
        },
      },
    },
  ],
};
