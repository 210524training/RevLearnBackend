// eslint-disable-next-line import/prefer-default-export
export const postCourseSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    courseTitle: { type: 'string' },
    startDate: { type: 'string' },
    endDate: { type: 'string' },
    teacherID: { type: 'string' },
    passingGrade: { type: 'string' },
    students: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    category: { type: 'string' },
    assignments: { type: 'string' },
    activities: {
      type: 'array',

    },
  },
  required: [
    'id',
    'courseTitle',
    'startDate',
    'endDate',
    'teacherID',
    'passingGrade',
    'category',
  ],
};
