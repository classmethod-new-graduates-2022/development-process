import { test, expect } from 'vitest'
import { countVowel } from './count-vowel'

test('test', () => {
  expect(countVowel('test')).toEqual(1)
})
