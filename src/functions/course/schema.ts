// eslint-disable-next-line import/prefer-default-export
export const postCourseSchema = {
  type: 'object',
  properties: {
    courseID: { type: 'string' },
    courseTitle: { type: 'string' },
    startDate: { type: 'string' },
    endDate: { type: 'string' },
    teacher: { type: 'string' },
    passingGrade: { type: 'string' },
    students: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    category: { type: 'string' },
    assignments: { type: 'string' },
    quizzes: { type: 'string' },
    admissionRequests: { type: 'string' },
  },
  required: [
    'courseID',
    'courseTitle',
    'startDate',
    'endDate',
    'teacher',
    'passingGrade',
    'category',
  ],
};
