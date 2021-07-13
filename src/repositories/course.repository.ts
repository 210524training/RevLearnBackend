import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import dynamo from '../dynamodb/dynamodb';
import Course from '../models/Course';
import User from '../models/User';

class CourseRepository {
  constructor(
    private docClient = dynamo,
  ) {}
}