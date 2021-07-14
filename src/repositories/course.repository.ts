/* eslint-disable class-methods-use-this */
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import dynamo from '../dynamodb/dynamodb';
import Course from '../models/Course';
import User from '../models/User';

class CourseRepository {
  constructor(
    private docClient = dynamo,
  ) {}

  async postCourse(course: Course): Promise<boolean> {
    const params: DocumentClient.PutItemInput = {
      TableName: 'Courses',
      Item: course,
    };

    return this.docClient.put(params).promise()
      .catch((error) => { console.log(error); return false; })
      .then((result) => { console.log(result); return true; });
  }

  async getUserCourses(userID: string): Promise<Course[]> {
    const params: DocumentClient.ScanInput = {
      TableName: 'Courses',
      FilterExpression: 'contains(students, :userID)',
      ExpressionAttributeValues: {
        ':userID': userID,
      },
    };
    return this.docClient.scan(params).promise()
      .catch((error) => { console.log(error); return []; })
      .then((result) => { console.log(result); return result.Items as Course[]; });
  }

  async getAllCourses() {
    const params: DocumentClient.ScanInput = {
      TableName: 'Courses',
    };

    return this.docClient.scan(params).promise()
      .catch((err) => { console.log(err); return []; })
      .then((result) => { console.log(result); return result.Items as Course[]; });
  }
}

export default new CourseRepository();
