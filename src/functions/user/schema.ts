// eslint-disable-next-line import/prefer-default-export
export const postUserSchema = {
  type: 'object',
  properties: {
    username: { type: 'string' },
    password: { type: 'string' },
    courses: { type: 'string' },
    role: { type: 'string' },
    id: { type: 'string' },

  },
  required: [
    'username',
    'password',
    'role',
    'id',
  ],
};

export const loginSchema = {
  type: 'object',
  properties: {
    username: { type: 'string' },
    password: { type: 'string' },
  },
  required: [
    'username',
    'password',
  ],
};
