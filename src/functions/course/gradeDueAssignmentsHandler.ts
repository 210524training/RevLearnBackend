import 'source-map-support/register';
import { Assignment } from 'src/models/Assignment';

import courseService from '../../services/course.service';

function isAssignment(object: any): object is Assignment {
  return 'type' in object;
}

const gradeDueAssignmentsHandler = async () => {
  const courses = await courseService.getAll();

  courses.forEach(async (course) => {
    course.activities.forEach((activity) => {
      if(isAssignment(activity) && activity.dueDate > new Date()) {
        activity.submissions.forEach((submission) => {
          if(!submission.grade) {
            // eslint-disable-next-line no-param-reassign
            submission.grade = 'F';
          }
        });
      }
    });
    await courseService.updateCourse(course);
  });

  return 'Courses Updated';
};

// eslint-disable-next-line import/prefer-default-export
export const main = gradeDueAssignmentsHandler;
