import { test, expect } from 'vitest'
import { nabeatsu } from './nabeatsu'

test('nabe atsu', () => {
  expect(nabeatsu(3)).toEqual([0, 1, 2, 'aho'])
  expect(nabeatsu(0)).toEqual(['世界のなべあつ'])
})
