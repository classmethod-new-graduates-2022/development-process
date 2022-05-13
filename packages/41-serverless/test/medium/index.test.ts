/* eslint-disable no-unused-vars */
/* eslint-disable import/first */
process.env.TABLE_NAME = 'TEST_TABLE_NAME'
process.env.ENDPOINT = 'http://localhost:4566'

import { beforeEach, expect, test } from 'vitest'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb'
import { handler } from '../../lambda'

const ddbClient = new DynamoDBClient({ endpoint: 'http://localhost:4566' })
const documentClient = DynamoDBDocument.from(ddbClient)

beforeEach(async () => {
  await documentClient.put({
    TableName: 'TEST_TABLE_NAME',
    Item: { id: 1, name: 'test-name_before', age: 999 },
  })
})

test('test', async () => {
  // 1. `handler()`関数を呼び出して、
  // 2. 戻り値を確認して、
  // 3. DynamoDBの値が期待通り変更されているかを確認しましょう。
})
