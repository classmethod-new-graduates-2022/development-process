import { expect, test } from 'vitest'
import { nabeatsu } from './nabeatsu'

test('nabeatsu 0', () => {
  expect(nabeatsu(0)).toEqual('世界のなべあつ')
})

test('nabeatsu -1', () => {
  expect(nabeatsu(-1)).toEqual('自然数を入力してください')
})

test('nabeatsu 3.3', () => {
  expect(nabeatsu(3.3)).toEqual(['ahobow', 1, 2])
})

test('nabeatsu 4,5', () => {
  expect(nabeatsu(4, 5)).toEqual(['bow', 'aho', 7, 8])
})

test('nabeatsu 16', () => {
  expect(nabeatsu(16)).toEqual([
    'ahobow',
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
})

test('nabeatsu 37.5', () => {
  expect(nabeatsu(37.5)).toEqual([
    'ahobow',
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
})
