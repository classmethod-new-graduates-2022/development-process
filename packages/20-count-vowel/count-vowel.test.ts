import { expect, test } from 'vitest'
import { countVowel } from './count-vowel'

test('test', () => {
  expect(countVowel('test')).toEqual(1)
})

test('aiueo', () => {
  expect(countVowel('aiueo')).toEqual(5)
})
