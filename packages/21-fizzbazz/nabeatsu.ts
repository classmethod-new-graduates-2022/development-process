/*
 * fizzbazzを書いてみよう
 * 要件
 * 1. 入力された長さの配列を返す
 * 2. 配列は1から始まり、1ずつ増えて行く（例: `[1, 2, ....]`）
 * 3. '3'がつく数字 or 3の倍数でアホになる（例: `[1, 2, 'aho', 4, ...]`）
 * 4. 5の倍数で犬になる（例: `[1, 2, 'aho', 4, 'bow', ...]`）
 * 5. 3と4の条件を同時に満たす場合、アホな犬になる（例: `[ ..., 13, 14, 'ahobow', 16, ...]`）
 */

export const nabeatsu = (
  len: number,
  startNum: number = 0
): Array<number | string> | string => {
  const length = Math.floor(len)
  if (length === 0) {
    return '世界のなべあつ'
  }
  if (length < 0) {
    return '自然数を入力してください'
  }
  const fizzbuzz: Array<number | string> = []
  for (let i = startNum; i < length + startNum; i++) {
    const hasThree = i % 3 === 0 || i.toString().includes('3')
    const hasFive = i % 5 === 0
    if (hasFive && hasThree) {
      fizzbuzz.push('ahobow')
    } else if (hasFive) {
      fizzbuzz.push('bow')
    } else if (hasThree) {
      fizzbuzz.push('aho')
    } else {
      fizzbuzz.push(i)
    }
  }
  return fizzbuzz
}
