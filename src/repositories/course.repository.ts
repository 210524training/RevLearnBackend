/* eslint-disable class-methods-use-this */
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
      teacherID,
      passingGrade,
      students,
      category,
      activities,
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
        teacherID,
        passingGrade,
        students,
        category,
        activities,
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
      ProjectionExpression: 'id, courseTitle, startDate, endDate, teacherID, passingGrade, students, category, assignments, quizzes, admissionRequests',
      ExpressionAttributeValues: {
        ':c': 'course',
      },
    };

    return this.docClient.query(params).promise()
      .catch((error) => { console.log(error); return []; })
      .then((result) => { console.log(result); return result.Items as Course[]; });
  }

  async getCourseByID(id: string): Promise<Course> {
    const params: DocumentClient.QueryInput = {
      TableName: 'RevLearn',
      KeyConditionExpression: 'modelType = :c AND id = :id',
      ProjectionExpression: 'id, courseTitle, startDate, endDate, teacherID, passingGrade, students, category, assignments, quizzes, admissionRequests',
      ExpressionAttributeValues: {
        ':c': 'course',
        ':id': id,
      },
    };

    return this.docClient.query(params).promise()
      .catch((error) => { console.log(error); return []; })
      .then((result) => {
        console.log(result);
        return result.Items[0] as Course || null;
      });
  }

  async getStudentCourses(userID: string): Promise<Course[]> {
    const params: DocumentClient.QueryInput = {
      TableName: 'RevLearn',
      KeyConditionExpression: 'modelType = :c',
      FilterExpression: 'contains(students, :id)',
      ProjectionExpression: 'id, courseTitle, startDate, endDate, teacherID, passingGrade, students, category, assignments, quizzes, admissionRequests',
      ExpressionAttributeValues: {
        ':c': 'course',
        ':id': userID,
      },
    };

    return this.docClient.query(params).promise()
      .catch((error) => { console.log(error); return []; })
      .then((result) => { console.log(result); return result.Items as Course[]; });
  }

  async getTeacherCourses(userID: string): Promise<Course[]> {
    const params: DocumentClient.QueryInput = {
      TableName: 'RevLearn',
      KeyConditionExpression: 'modelType = :c',
      FilterExpression: 'teacherID = :userID',
      ProjectionExpression: 'id, courseTitle, startDate, endDate, teacherID, passingGrade, students, category, assignments, quizzes, admissionRequests',
      ExpressionAttributeValues: {
        ':c': 'course',
        ':userID': userID,
      },
    };

    return this.docClient.query(params).promise()
      .catch((error) => { console.log(error); return []; })
      .then((result) => { console.log(result); return result.Items as Course[]; });
  }

  async updateCourse(course: Course): Promise<boolean> {
    const params: DocumentClient.UpdateItemInput = {
      TableName: 'RevLearn',
      Key: {
        modelType: 'course',
        id: course.id,
      },
      UpdateExpression: 'SET courseTitle = :ct, startDate = :sd, endDate = :ed, teacherID = :t, passingGrade = :pg, students = :s, category = :c, activites = :a, admissionRequests = :ar',
      ExpressionAttributeValues: {
        ':ct': course.courseTitle,
        ':sd': course.startDate,
        ':ed': course.endDate,
        ':t': course.teacherID,
        ':pg': course.passingGrade,
        ':c': course.category,
        ':s': course.students || [],
        ':a': course.activities || [],
        ':ar': course.admissionRequests || [],
      },
      ReturnValues: 'ALL_NEW',
    };

    return this.docClient.update(params).promise()
      .catch((error) => { console.log(error); return false; })
      .then((result) => { console.log(result); return true; });
  }

  async deleteCourse(id: string): Promise<boolean> {
    const params: DocumentClient.DeleteItemInput = {
      TableName: 'RevLearn',
      Key: {
        modelType: 'course',
        id,
      },
    };

    return this.docClient.delete(params).promise()
      .catch((error) => { console.log(error); return false; })
      .then((result) => { console.log(result); return true; });
  }
}

export default new CourseRepository();
