import { expect, test } from 'vitest'
import { countVowel } from './count-vowel'

type countVowelTest = { name: string; input: string; expected: number }
const testcase: countVowelTest[] = [
  { name: 'only small characters', input: 'testcase', expected: 3 },
  { name: 'includeing space', input: 'hello world', expected: 3 },
  { name: 'includeing Uppercase', input: 'KONnichiwa', expected: 4 },
  { name: 'empty', input: '', expected: 0 },
]
testcase.forEach((t) => {
  test(t.name, () => {
    expect(countVowel(t.input)).toEqual(t.expected)
  })
})

// test('only small characters', () => {
//     expect(countVowel('testcase')).toEqual(3)
// })

// test('including space', () => {
//     expect(countVowel('hello world')).toEqual(3)
// })

// 質問
// - table driven testってtsでもやるのか？
// - jestに対してvitestの方が主流になってきている？
// - vitest,jestのテストは並列実行？
