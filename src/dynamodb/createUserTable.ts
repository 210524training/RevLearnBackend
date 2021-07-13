import * as AWS from 'aws-sdk';

AWS.config.update( { region: 'us-west-2' });

const dynamo = new AWS.DynamoDB({ apiVersion: 'latest' });

const params: AWS.DynamoDB.CreateTableInput = {
  TableName: 'Users',
  KeySchema: [
    
  ]
}