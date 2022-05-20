/* eslint-disable no-unused-vars */
/* eslint-disable import/first */
process.env.TABLE_NAME = 'TEST_TABLE_NAME'
process.env.ENDPOINT = 'http://localhost:4566'

import { beforeEach, expect, test } from 'vitest'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb'
import { handler } from '../../lambda'

const ddbClient = new DynamoDBClient({
  endpoint: 'http://localhost:4566',
  credentials: {
    accessKeyId: 'DUMMY',
    secretAccessKey: 'DUMMY',
  },
  region: 'ap-northeast-1',
})
const documentClient = DynamoDBDocument.from(ddbClient)

beforeEach(async () => {
  await documentClient.put({
    TableName: 'TEST_TABLE_NAME',
    Item: { id: 1, name: 'test-name_before', age: 999 },
  })
})

test('test', async () => {
  const item = { id: 1, name: 'test-name', age: 18 }
  // 1. `handler()`関数を呼び出して、
  const res = await handler(item)
  // 2. 戻り値を確認して、
  expect(res).toEqual({ ok: true, data: item })
  // 3. DynamoDBの値が期待通り変更されているかを確認しましょう。
  const result = await documentClient.get({
    TableName: process.env.TABLE_NAME,
    Key: {
      id: 1,
    },
  })
  expect(result.Item).toEqual(item)
})
