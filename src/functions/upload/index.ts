import { handlerPath } from '../../libs/handlerResolver';
import schema from './Schema';

export default {
  handler: `${handlerPath(__dirname)}/Handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'upload',
        cors: true,
        request: {
          schema: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
