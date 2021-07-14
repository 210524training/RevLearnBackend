/* eslint-disable import/no-unresolved */
import { handlerPath } from '@libs/handlerResolver';
import { postCourseSchema } from './schema';

export const getAllCourses = {
  handler: `${handlerPath(__dirname)}/getAllCoursesHandler.main`,
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

export const getCourseByID = {
  handler: `${handlerPath(__dirname)}/getCourseByIDHandler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'course/{id}',
        request: {
          schema: null,
        },
      },
    },
  ],
};

export const getCoursesByUserID = {
  handler: `${handlerPath(__dirname)}/getCoursesByUserIDHandler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'course/user/{id}',
        request: {
          schema: null,
        },
      },
    },
  ],
};

export const updateCourse = {
  handler: `${handlerPath(__dirname)}/updateCourseHandler.main`,
  events: [
    {
      http: {
        method: 'put',
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

export const deleteCourse = {
  handler: `${handlerPath(__dirname)}/deleteCourseHandler.main`,
  events: [
    {
      http: {
        method: 'delete',
        path: 'course/{id}',
        request: {
          schema: null,
        },
      },
    },
  ],
};
