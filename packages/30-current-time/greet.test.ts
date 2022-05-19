import { test, expect } from 'vitest'
import { judgeGreeting } from './greet'

test('現在時刻が12時から18時未満の場合、「こんにちは」と挨拶する', () => {
  const result = judgeGreeting(new Date('2022-04-01T12:00:00+09:00'))
  expect(result).toBe('こんにちは')
})
