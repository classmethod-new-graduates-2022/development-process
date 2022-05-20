import { test, expect } from 'vitest'
import { buildGreet } from './greet'

test.each([
  [new Date('2022-04-01T04:59:59+09:00'), 'こんばんは'],
  [new Date('2022-04-01T05:00:00+09:00'), 'おはようございます'],
  [new Date('2022-04-01T11:59:59+09:00'), 'おはようございます'],
  [new Date('2022-04-01T12:00:00+09:00'), 'こんにちは'],
  [new Date('2022-04-01T17:59:59+09:00'), 'こんにちは'],
  [new Date('2022-04-01T18:00:00+09:00'), 'こんばんは'],
])('%sの時は%s', (date, expected) => {
  const nowFetcher = () => date
  const greet = buildGreet(nowFetcher)
  expect(greet('TOM')).toBe(expected)
})
