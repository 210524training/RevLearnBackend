import 'source-map-support/register';

import * as AWS from 'aws-sdk';
import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';
import { formatJSONResponse } from '../../libs/apiGateway';

import { middyfy } from '../../libs/lambda';
import schema from './schema';

const BUCKETNAME: string = 'revlearnbackend-dev-serverlessdeploymentbucket-1imwbwu2cp9ej';
const IAM_USER_KEY: string = 'AKIAVNCJ6EQEYAOALCO2';
const IAM_USER_SECRET: string = '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';

const s3bucket = new AWS.S3({
  accessKeyId: IAM_USER_KEY,
  secretAccessKey: IAM_USER_SECRET,
});

function uploadObject(objectName, objectData) {
  const params: AWS.S3.PutObjectRequest = {
    Bucket: BUCKETNAME,
    Key: objectName,
    Body: objectData,
  };

  s3bucket.upload(params, (err, data) => {
    if(err) throw err;
    console.log(`File uploaded successfully at ${data.Location}`);
  });
}

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  uploadObject('this_is_the_name/test', 'This is the content');
  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
  });
};

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(hello);
