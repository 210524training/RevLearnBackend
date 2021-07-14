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

  async getCourseByID(id: string): Promise<Course> {
    const params: DocumentClient.QueryInput = {
      TableName: 'RevLearn',
      KeyConditionExpression: 'modelType = :c AND id = :id',
      ProjectionExpression: 'id, courseTitle, startDate, endDate, teacher, passingGrade, students, category, assignments, quizzes, admissionRequests',
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

  async getUserCourses(userID: string): Promise<Course[]> {
    const params: DocumentClient.QueryInput = {
      TableName: 'RevLearn',
      KeyConditionExpression: 'modelType = :c',
      FilterExpression: 'contains(students, :userID)',
      ProjectionExpression: 'id, courseTitle, startDate, endDate, teacher, passingGrade, students, category, assignments, quizzes, admissionRequests',
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
      UpdateExpression: 'SET courseTitle = :ct, startDate = :sd, endDate = :ed, teacher = :t, passingGrade = :pg, students = :s, category = :c, assignments = :a, quizzes = :q, admissionRequests = :ar',
      ExpressionAttributeValues: {
        ':ct': course.courseTitle,
        ':sd': course.startDate,
        ':ed': course.endDate,
        ':t': course.teacher,
        ':pg': course.passingGrade,
        ':c': course.category,
        ':s': course.students || [],
        ':a': course.assignments || [],
        ':q': course.quizzes || [],
        ':ar': course.admissionRequests || [],
      },
      ReturnValues: 'ALL_NEW',
    };

    return this.docClient.update(params).promise()
      .catch((error) => { console.log(error); return false; })
      .then((result) => { console.log(result); return true; });
  }
}

export default new CourseRepository();
