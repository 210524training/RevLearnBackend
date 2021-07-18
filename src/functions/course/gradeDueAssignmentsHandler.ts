import 'source-map-support/register';
import { Assignment } from '../../models/Assignment';

import courseService from '../../services/course.service';

function isAssignment(object: any): object is Assignment {
  return 'type' in object;
}

const gradeDueAssignmentsHandler = async () => {
  const courses = await courseService.getAll();

  try {
    courses.forEach(async (course) => {
      if(course.activities) {
        course.activities.forEach((activity) => {
          if(isAssignment(activity) && new Date(activity.dueDate) < new Date() && activity.submissions) {
            activity.submissions.forEach((submission) => {
              if(!submission.grade) {
                // eslint-disable-next-line no-param-reassign
                submission.grade = 'F';
                console.log('updated submission:', submission);
              }
            });
          }
        });
        await courseService.updateCourse(course);
      }
    });

    return 'Successfully updated courses';
  } catch(err) {
    return `Error updating courses: ${err.message}`;
  }
};

// eslint-disable-next-line import/prefer-default-export
export const main = gradeDueAssignmentsHandler;
