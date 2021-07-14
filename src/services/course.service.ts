/* eslint-disable class-methods-use-this */
import courseRepository from '../repositories/course.repository';
import Course from '../models/Course';

class CourseService {
  constructor(
    private repo = courseRepository,
  ) {}

  getAll(): Promise<Course[]> {
    return this.repo.getAllCourses();
  }

  addCourse(course: Course): Promise<boolean> {
    return this.repo.postCourse(course);
  }

  getUserCourses(userID: string): Promise<Course[]> {
    return this.repo.getUserCourses(userID);
  }
}

export default new CourseService();
