/* eslint-disable import/no-unresolved */
import { handlerPath } from '@libs/handlerResolver';
import { postUserSchema } from './schema';

export const getAllUsers = {
  handler: `${handlerPath(__dirname)}/getAllUsersHandler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'user',
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
        request: {
          schema: {
            'application/json': postUserSchema,
          },
          cors: true,
        },
      },
    },
  ],
};
