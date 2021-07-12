import Course from '../models/Course';

class CourseService {
  // eslint-disable-next-line class-methods-use-this
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
}

export default new CourseService();
