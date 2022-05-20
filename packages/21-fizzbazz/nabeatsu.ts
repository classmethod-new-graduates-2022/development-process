/*
 * fizzbazzを書いてみよう
 * 要件
 * 1. 入力された長さの配列を返す
 * 2. 配列は1から始まり、1ずつ増えて行く（例: `[1, 2, ....]`）
 * 3. '3'がつく数字と3の倍数でアホになる（例: `[1, 2, 'aho', 4, ...]`）
 * 4. 5の倍数で犬になる（例: `[1, 2, 'aho', 4, 'bow', ...]`）
 * 5. 3と4の条件を同時に満たす場合、アホな犬になる（例: `[ ..., 13, 14, 'ahobow', 16, ...]`）
 */

export const nabeatsu = (len: number): Array<number | string> => {
  const ary: Array<number | string> = []
  for (let i = 1; i <= len; i++) {
    const isAho = i % 3 === 0 || i.toString().includes('3')
    const isBow = i % 5 === 0
    if (isAho && isBow) {
      ary.push('ahobow')
    } else if (isAho) {
      ary.push('aho')
    } else if (isBow) {
      ary.push('bow')
    } else {
      ary.push(i)
    }
  }
  return ary
}
