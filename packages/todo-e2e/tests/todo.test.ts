import fs from 'fs'
import { test, expect } from '@playwright/test'

test.beforeEach(() => {
  if (fs.existsSync('../todo-api/db.json')) {
    // データリセット
    fs.unlinkSync('../todo-api/db.json')
  }
})

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.fill('input[name="content"]', 'テスト')
  await page.click('text="Todo追加"')
  await expect(page.locator('li >> nth=0')).toContainText('テスト')
})
