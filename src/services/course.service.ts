/* eslint-disable class-methods-use-this */
import courseRepository from '../repositories/course.repository';
import Course from '../models/Course';

class CourseService {
  constructor(
    private repo = courseRepository,
  ) {}
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

  addCourse(course: Course): Promise<boolean> {
    return this.repo.postCourse(course);
  }
}

export default new CourseService();
