import { test, expect } from 'vitest'
import { buildGreet } from './greet'

test.each([
  [new Date('2022-04-01T04:59:59+09:00'), 'TOM', 'こんばんはTOM'],
  [new Date('2022-04-01T05:00:00+09:00'), 'TOM', 'おはようございますTOM'],
  [new Date('2022-04-01T11:59:59+09:00'), 'TOM', 'おはようございますTOM'],
  [new Date('2022-04-01T12:00:00+09:00'), 'Alice', 'こんにちはAlice'],
  [new Date('2022-04-01T17:59:59+09:00'), 'Alice', 'こんにちはAlice'],
  [new Date('2022-04-01T18:00:00+09:00'), 'Alice', 'こんばんはAlice'],
])('%sに%sに挨拶をする', (date, name, expected) => {
  const nowFetcher = () => date
  const greet = buildGreet(nowFetcher)
  expect(greet(name)).toBe(expected)
})
