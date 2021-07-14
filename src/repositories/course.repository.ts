import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import dynamo from '../dynamodb/dynamodb';
import Course from '../models/Course';

class CourseRepository {
  constructor(
    private docClient = dynamo,
  ) {}

  async postCourse(course: Course): Promise<boolean> {
    const {
      id,
      courseTitle,
      startDate,
      endDate,
      teacher,
      passingGrade,
      students, category,
      assignments,
      quizzes,
      admissionRequests,
    } = course;

    const params: DocumentClient.PutItemInput = {
      TableName: 'RevLearn',
      Item: {
        modelType: 'course',
        id,
        courseTitle,
        startDate,
        endDate,
        teacher,
        passingGrade,
        students,
        category,
        assignments,
        quizzes,
        admissionRequests,
      },
    };

    return this.docClient.put(params).promise()
      .catch((error) => { console.log(error); return false; })
      .then((result) => { console.log(result); return true; });
  }

  async getAllCourses(): Promise<Course[]> {
    const params: DocumentClient.QueryInput = {
      TableName: 'RevLearn',
      KeyConditionExpression: 'modelType = :c',
      ProjectionExpression: 'id, courseTitle, startDate, endDate, teacher, passingGrade, students, category, assignments, quizzes, admissionRequests',
      ExpressionAttributeValues: {
        ':c': 'course',
      },
    };

    return this.docClient.query(params).promise()
      .catch((error) => { console.log(error); return []; })
      .then((result) => { console.log(result); return result.Items as Course[]; });
  }

  async getUserCourses(userID: string): Promise<Course[]> {
    const params: DocumentClient.ScanInput = {
      TableName: 'Courses',
      FilterExpression: ':userID IN students',
      ExpressionAttributeValues: {
        ':userID': userID,
      },
    };
    return this.docClient.scan(params).promise()
      .catch((error) => { console.log(error); return []; })
      .then((result) => { console.log(result); return result.Items as Course[]; });
  }
}

export default new CourseRepository();
