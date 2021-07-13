// simply importing AWS itself gives an error.
// import AWS from 'aws-sdk' does not work
// import * as AWS from 'aws-sdk' works
const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient({
  region: 'us-west-2',
  endpoint: 'http://dynamodb.us-west-2.amazonaws.com',
  apiVersion: 'latest',
});

export default dynamo;
