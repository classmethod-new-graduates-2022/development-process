import { expect, test } from 'vitest'
import { countV } from './count-vowel'

test('test', () => {
  expect(countV('aiueo')).toEqual(5)
})
