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
  const res = await handler({ id: 1, name: 'test-name', age: 18 })

  expect(res).toEqual({ ok: true, data: { id: 1, name: 'test-name', age: 18 } })

  const item = await documentClient.get({
    TableName: 'TEST_TABLE_NAME',
    Key: { id: 1 },
  })

  expect(item).toMatchObject({ Item: { id: 1, name: 'test-name', age: 18 } })
})
