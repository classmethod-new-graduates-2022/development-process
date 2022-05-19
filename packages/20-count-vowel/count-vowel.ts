/*
 * 母音を数えよう
 * 要件:
 * 入力された文字列の母音を数えて返す
 *
 * 例:
 * "vowel" => 2
 * "Nabe Atsu" => 4
 */

export const countVowel = (/* word: string */) => {}

export function countV(ObjectWord: string): number {
  const ObjectWordBbox = ObjectWord.split('')
  const VowelBox: string[] = ['A', 'I', 'U', 'E', 'O', 'a', 'i', 'u', 'e', 'o']

  let num: number = 0
  for (const word of ObjectWordBbox) {
    const check: boolean = VowelBox.includes(word)
    if (check === true) {
      num += 1
    }
  }
  return num
}
