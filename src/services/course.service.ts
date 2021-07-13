/* eslint-disable class-methods-use-this */
import Course from '../models/Course';

class CourseService {
  getAll(): Course[] {
    return [{
      courseID: '1234',
      courseTitle: 'Calculus',
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now()),
      teacher: 'ProfessorC',
      passingGrade: 'C',
      category: 'Mathematic',
      students: [],
      assignments: [],
      quizzes: [],
      admissionRequests: [],
    }];
  }

  addCourse(course: Course): boolean {
    console.log(course);
    return true;
  }
}

export default new CourseService();
