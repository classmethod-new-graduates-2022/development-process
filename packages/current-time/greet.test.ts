import { test, expect } from 'vitest'
import { greet } from './greet'

test('greet', () => {
  const result = greet()
  expect(result).toBe('こんにちは')
})
