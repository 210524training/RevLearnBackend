import User from './User';

/**
 * Represents the data of an assignment
 * @property courseID: string
 * @property courseTitle: string
 * @property startDate: Date
 * @property endDate: Date
 * @property teacher: string
 * @property passingGrade: string
 * @property students: string[]
 * @property category: string
 * @property assignments: string[]
 * @property quizzes: string[]
 */
export default class Course {
  public courseID: string;
  public courseTitle: string;
  public startDate: Date;
  public endDate: Date;
  public teacher: string;
  public passingGrade: string;
  public students: string[];
  public category: string;
  public assignments: string[];
  public quizzes: string[];
  public admissionRequests?: User[];
}
