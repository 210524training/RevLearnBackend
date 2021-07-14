/* eslint-disable class-methods-use-this */
import courseRepository from '../repositories/course.repository';
import Course from '../models/Course';

class CourseService {
  constructor(
    private repo = courseRepository,
  ) {}

  addCourse(course: Course): Promise<boolean> {
    return this.repo.postCourse(course);
  }

  getAll(): Promise<Course[]> {
    return this.repo.getAllCourses();
  }

  getCourseByID(id: string): Promise<Course> {
    return this.repo.getCourseByID(id);
  }

  getUserCourses(userID: string): Promise<Course[]> {
    return this.repo.getUserCourses(userID);
  }
}

export default new CourseService();
