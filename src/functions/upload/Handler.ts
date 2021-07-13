/* eslint-disable arrow-body-style */
import 'source-map-support/register';

// import * as AWS from 'aws-sdk';
// import Multipart from 'parse-multipart';
import Multipart from 'aws-lambda-multipart-parser';
import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/apiGateway';
import { formatJSONResponse } from '../../libs/apiGateway';
import { middyfy } from '../../libs/lambda';
import schema from './Schema';

/* const BUCKETNAME: string = 'revlearnbackend-dev-serverlessdeploymentbucket-1imwbwu2cp9ej';
const IAM_USER_KEY: string = 'AKIAVNCJ6EQEYAOALCO2';
const IAM_USER_SECRET: string = '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';

const s3bucket = new AWS.S3({
  accessKeyId: IAM_USER_KEY,
  secretAccessKey: IAM_USER_SECRET,
}); */

/* function uploadObject(objectName, objectData) {
  const params: AWS.S3.PutObjectRequest = {
    Bucket: BUCKETNAME,
    Key: objectName,
    Body: objectData,
  };

  s3bucket.upload(params, (err, data) => {
    if(err) throw err;
    console.log(`File uploaded successfully at ${data.Location}`);
  });
} */

const Upload: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  let text: string;
  try {
    const { body } = event;
    // const boundary = event.;
    console.log('Body: ', event);
    console.log('Event Body: ', event.body);

    const parsed = Multipart.parse(event, 'false');
    console.log('Parsed: ', parsed);

    // Multipart.Parse(body, event.headers);
    /* const buff = Buffer.from('c3RhY2thYnVzZS5jb20=', 'base64');
    text = buff.toString('ascii');
    console.log('Text', text); */
    /* const parts = Multipart.parse(event, boundary);

    console.log(parts); */
  } catch(err) {
    console.log(err);
  }
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Headers': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
    },
    body: JSON.stringify('Returning from upload '),
  };
  // uploadObject('this_is_the_name/test', 'This is the content');
  return response;
};

// eslint-disable-next-line import/prefer-default-export
export const main = middyfy(Upload);
