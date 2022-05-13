/* eslint-disable no-new */
import * as cdk from 'aws-cdk-lib'
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'

const app = new cdk.App()
const stack = new cdk.Stack(app, 'ShinsotsuKenshu')

new dynamodb.Table(stack, 'Table', {
  tableName: 'shinsotsu-kenshu-table',
  partitionKey: { name: 'id', type: dynamodb.AttributeType.NUMBER },
  removalPolicy: cdk.RemovalPolicy.DESTROY,
})

new NodejsFunction(stack, 'Lambda', {
  functionName: 'shinsotsu-kenshu-function',
  entry: './lambda/index.ts',
})
