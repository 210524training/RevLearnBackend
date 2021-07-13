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
}

export default new CourseRepository();
