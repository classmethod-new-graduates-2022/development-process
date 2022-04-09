import { test, expect } from 'vitest'
import { greet } from './greet'

test('現在時刻が12時から18時未満の場合、「こんにちは」と挨拶する', () => {
  const result = greet()
  expect(result).toBe('こんにちは')
})
