/* eslint-disable no-unused-vars */

import { beforeEach, expect, test } from 'vitest'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb'
import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda'

const documentClient = DynamoDBDocument.from(
  new DynamoDBClient({ region: 'ap-northeast-1' })
)
const lambdaClient = new LambdaClient({})

beforeEach(async () => {
  await documentClient.put({
    TableName: 'shinsotsu-kenshu-table',
    Item: { id: 1, name: 'test-name_before', age: 999 },
  })
})

test('test', async () => {
  // 1. lambdaを呼び出して、
  // 2. レスポンスを確認し、
  // 3. DynamoDBの値が期待通り変更されているかを確認しましょう。
})
