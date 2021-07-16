import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import dynamo from '../dynamodb/dynamodb';
import User from '../models/User';

class UserRepository {
  constructor(
    private docClient = dynamo,
  ) {}

  async postUser(user: User): Promise<boolean> {
    const {
      username,
      password,
      role,
      id,
    } = user;

    const params: DocumentClient.PutItemInput = {
      TableName: 'RevLearn',
      Item: {
        modelType: 'user',
        username,
        password,
        role,
        id,
      },
    };

    return this.docClient.put(params).promise()
      .catch((error) => { console.log(error); return false; })
      .then((result) => { console.log(result); return true; });
  }

  async getAllUsers(): Promise<User[]> {
    const params: DocumentClient.QueryInput = {
      TableName: 'RevLearn',
      KeyConditionExpression: 'modelType = :u',
      ProjectionExpression: 'username, password, courses, role, id',
      ExpressionAttributeValues: {
        ':u': 'user',
      },
    };

    return this.docClient.query(params).promise()
      .catch((error) => { console.log(error); return []; })
      .then((result) => { console.log(result); return result.Items as User[]; });
  }

  async getUserByID() {}

  async deleteUser() {}
}
export default new UserRepository();
