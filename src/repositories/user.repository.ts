import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import dynamo from '../dynamodb/dynamodb';
import User from '../models/User';

class UserRepository {
  constructor(
    private docClient = dynamo,
  ) {}

  async addUser(user: User): Promise<boolean> {
    const params: DocumentClient.PutItemInput = {
      TableName: 'RL_Users',
      Item: user,
    };

    return this.docClient.put(params).promise()
      .catch((error) => { console.log(error); return false; })
      .then((result) => { console.log(result); return true; });
  }

  async getAllUsers(){

  }

  async getUserByID(){}


  async deleteUser(){}

}
export default new UserRepository();
