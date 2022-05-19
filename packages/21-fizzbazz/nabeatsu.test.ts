import { expect, test } from 'vitest'
import { nabeatsu } from './nabeatsu'

test('test', () => {
  expect(nabeatsu(5)).toEqual([0, 1, 2, 'aho', 4])
  expect(nabeatsu(16)).toEqual([
    0,
    1,
    2,
    'aho',
    4,
    'bow',
    'aho',
    7,
    8,
    'aho',
    'bow',
    11,
    'aho',
    'aho',
    14,
    'ahobow',
  ])
  expect(nabeatsu(37)).toEqual([
    0,
    1,
    2,
    'aho',
    4,
    'bow',
    'aho',
    7,
    8,
    'aho',
    'bow',
    11,
    'aho',
    'aho',
    14,
    'ahobow',
    16,
    17,
    'aho',
    19,
    'bow',
    'aho',
    22,
    'aho',
    'aho',
    'bow',
    26,
    'aho',
    28,
    29,
    'ahobow',
    'aho',
    'aho',
    'aho',
    'aho',
    'ahobow',
    'aho',
  ])
  expect(nabeatsu(0)).toEqual('世界のなべあつ')
  expect(nabeatsu(5.2)).toEqual([0, 1, 2, 'aho', 4])
  expect(nabeatsu(4, 5)).toEqual(['bow', 'aho', 7, 8])
})
