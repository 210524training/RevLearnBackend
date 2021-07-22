/* eslint-disable object-curly-newline */
/* eslint-disable import/no-unresolved */

import type { AWS } from '@serverless/typescript';
import hello from '@functions/hello';
import Upload from '@functions/upload';
import { postCourse, getAllCourses, getCourseByID, getCoursesByStudentID, getCoursesByTeacherID, updateCourse, deleteCourse, gradeDueAssignments } from '@functions/course';
import { postUser, getAllUsers, getAllTeachers, getUserByID, deleteUser, updateUser, login } from '@functions/user';

const serverlessConfiguration: AWS = {
  service: 'RevLearnBackend',
  useDotenv: true,
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    profile: process.env.AWS_PROFILE,
    region: 'us-west-2',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: {
    hello,
    Upload,
    login,
    getAllCourses,
    getCourseByID,
    getCoursesByStudentID,
    getCoursesByTeacherID,
    postCourse,
    updateCourse,
    deleteCourse,
    getAllUsers,
    getAllTeachers,
    getUserByID,
    postUser,
    updateUser,
    deleteUser,
    gradeDueAssignments,
  },
};

module.exports = serverlessConfiguration;
