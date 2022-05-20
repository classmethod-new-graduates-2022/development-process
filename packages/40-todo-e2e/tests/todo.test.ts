/* eslint-disable no-await-in-loop */
import { test, expect } from '@playwright/test'

import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb'

const documentClient = DynamoDBDocument.from(
  new DynamoDBClient({
    endpoint: 'http://localhost:4566',
    credentials: {
      accessKeyId: 'DUMMY',
      secretAccessKey: 'DUMMY',
    },
    region: 'ap-northeast-1',
  })
)

test.beforeEach(async () => {
  // データリセット
  const { Items: todos = [] } = await documentClient.scan({
    TableName: 'todos',
  })
  await Promise.all(
    todos.map((todo) =>
      documentClient.delete({ TableName: 'todos', Key: { id: todo.id } })
    )
  )
})

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await page.fill('input[name="content"]', 'テスト')
  await page.click('text="Todo追加"')
  await expect(page.locator('li >> nth=0')).toContainText('テスト')

  // DBにデータが追加されていることを確認する
  const { Items: todos = [] } = await documentClient.scan({
    TableName: 'todos',
  })
  expect(todos.length).toEqual(1)

  // 削除ボタンの動作と確認
  await page.pause()
  await page.click('text="Todo削除')

  // DBからデータが消されていることを確認する
  const { Items: todosAfterDeleted = [] } = await documentClient.scan({
    TableName: 'todos',
  })
  expect(todosAfterDeleted.length).toEqual(0)
})
