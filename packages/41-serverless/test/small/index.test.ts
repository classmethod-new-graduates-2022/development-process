/* eslint-disable import/first */
process.env.TABLE_NAME = 'TEST_TABLE_NAME'

import { expect, test } from 'vitest'
import { mockClient } from 'aws-sdk-client-mock'
import { DynamoDBDocumentClient, UpdateCommand } from '@aws-sdk/lib-dynamodb'
import { handler } from '../../lambda'

const clientMock = mockClient(DynamoDBDocumentClient)

test('test', async () => {
  clientMock
    .on(UpdateCommand)
    .resolves({ Attributes: { id: 1, name: 'test-name', age: 18 } })

  const res = await handler({ id: 1, name: 'test-name', age: 18 })

  expect(res).toEqual({ ok: true, data: { id: 1, name: 'test-name', age: 18 } })

  const calls = clientMock.commandCalls(UpdateCommand)
  expect(calls[0].args[0].input).toEqual({
    TableName: 'TEST_TABLE_NAME',
    Key: { id: 1 },
    ExpressionAttributeNames: { '#name': 'name', '#age': 'age' },
    ExpressionAttributeValues: { ':name': 'test-name', ':age': 18 },
    UpdateExpression: 'SET #name=:name, #age=:age',
    ReturnValues: 'ALL_NEW',
  })
})
