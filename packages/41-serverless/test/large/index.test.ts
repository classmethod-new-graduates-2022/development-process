/* eslint-disable import/first */
process.env.TABLE_NAME = 'TEST_TABLE_NAME'

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
  const res = await lambdaClient.send(
    new InvokeCommand({
      FunctionName: 'shinsotsu-kenshu-function',
      Payload: Buffer.from(
        JSON.stringify({ id: 1, name: 'test-name', age: 18 })
      ),
    })
  )

  expect(res).toMatchObject({ Payload: expect.any(Uint8Array) })
  expect(JSON.parse(Buffer.from(res.Payload!).toString())).toEqual({
    ok: true,
    data: { id: 1, name: 'test-name', age: 18 },
  })

  const item = await documentClient.get({
    TableName: 'shinsotsu-kenshu-table',
    Key: { id: 1 },
  })

  expect(item).toMatchObject({ Item: { id: 1, name: 'test-name', age: 18 } })
})
