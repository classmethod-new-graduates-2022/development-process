/*
 * 母音を数えよう
 * 要件:
 * 入力された文字列の母音を数えて返す
 *
 * 例:
 * "vowel" => 2
 * "Nabe Atsu" => 4
 */

const LIST = 'AIUEO'

export const countVowel = (word: string) => word
    .toUpperCase()
    .split('')
    .filter((char) => LIST.includes(char)).length
