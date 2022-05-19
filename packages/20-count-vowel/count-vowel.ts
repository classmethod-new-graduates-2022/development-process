/*
 * 母音を数えよう
 * 要件:
 * 入力された文字列の母音を数えて返す
 *
 * 例:
 * "vowel" => 2
 * "Nabe Atsu" => 4
 */

export const countVowel = (word: string): number => {
  let count: number = 0
  for (const char of word.toUpperCase()) {
    switch (char) {
      case 'A':
      case 'I':
      case 'U':
      case 'E':
      case 'O':
        count += 1
        break
      default:
    }
  }
  return count
}
