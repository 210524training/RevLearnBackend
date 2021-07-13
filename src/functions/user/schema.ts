// eslint-disable-next-line import/prefer-default-export
export const postUserSchema = {
  type: 'object',
  properties: {
    username: { type: 'string' },
    password: { type: 'string' },
    courses: { type: 'string' },
    role: { type: 'string' },
    userID: { type: 'string' },

  },
  required: [
    'username',
    'password',
    'role',
    'userID',
  ],
};
