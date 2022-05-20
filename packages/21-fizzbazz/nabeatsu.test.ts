import { test, expect } from 'vitest'
import { nabeatsu } from './nabeatsu'

test.each([[1, [1]]])('test %i', (a, expected) => {
  expect(nabeatsu(a)).toEqual(expected)
})
