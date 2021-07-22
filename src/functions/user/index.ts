/* eslint-disable import/no-unresolved */
import { handlerPath } from '@libs/handlerResolver';
import { postUserSchema, loginSchema } from './schema';

export const login = {
  handler: `${handlerPath(__dirname)}/loginHandler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'login',
        cors: true,
        request: {
          schema: {
            'application/json': loginSchema,
          },
        },
      },
    },
  ],
};

export const getAllUsers = {
  handler: `${handlerPath(__dirname)}/getAllUsersHandler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'user',
        cors: true,
        request: {
          schema: null,
        },
      },
    },
  ],
};

export const getAllTeachers = {
  handler: `${handlerPath(__dirname)}/getAllTeachersHandler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'user/teacher',
        cors: true,
        request: {
          schema: null,
        },
      },
    },
  ],
};

export const postUser = {
  handler: `${handlerPath(__dirname)}/postUserHandler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'user',
        cors: true,
        request: {
          schema: {
            'application/json': postUserSchema,
          },
        },
      },
    },
  ],
};

export const updateUser = {
  handler: `${handlerPath(__dirname)}/updateUserHandler.main`,
  events: [
    {
      http: {
        method: 'put',
        path: 'user',
        cors: true,
        request: {
          schema: {
            'application/json': postUserSchema,
          },
        },
      },
    },
  ],
};

export const deleteUser = {
  handler: `${handlerPath(__dirname)}/deleteUserHandler.main`,
  events: [
    {
      http: {
        method: 'delete',
        path: 'user/{id}',
        cors: true,
        request: {
          schema: null,
        },
      },
    },
  ],
};

export const getUserByID = {
  handler: `${handlerPath(__dirname)}/getUserByIDHandler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'user/{id}',
        cors: true,
        request: {
          schema: null,
        },
      },
    },
  ],
};
