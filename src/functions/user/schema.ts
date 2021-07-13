export const getAllUsersSchema = {
  type: 'object',
} as const;

export const postUserSchema = {
  type: 'object',
  properties: {
    username: { type: 'string' },
    password: { type: 'string' },
    courses: { type: [] },
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
