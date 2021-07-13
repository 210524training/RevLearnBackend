import * as AWS from 'aws-sdk';

AWS.config.update({ region: 'us-west-2' });

const dynamo = new AWS.DynamoDB({ apiVersion: 'latest' });

const params: AWS.DynamoDB.CreateTableInput = {
  TableName: 'Courses',
  KeySchema: [
    {
      AttributeName: 'courseID',
      KeyType: 'HASH',
    },
  ],
  AttributeDefinitions: [
    {
      AttributeName: 'courseID',
      AttributeType: 'S',
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 2,
    WriteCapacityUnits: 2,
  },
  StreamSpecification: {
    StreamEnabled: false,
  },
};

dynamo.createTable(params, (err, data) => {
  if(err) {
    console.log('error', err);
  } else {
    console.log('Table Created', data);
  }
});
