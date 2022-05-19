/*
 * fizzbuzzを書いてみよう
 * 要件
 * 1. 入力された長さの配列を返す
 * 2. 配列は1から始まり、1ずつ増えて行く（例: `[1, 2, ....]`）
 * 3. '3'がつく数字と3の倍数でアホになる（例: `[1, 2, 'aho', 4, ...]`）
 * 4. 5の倍数で犬になる（例: `[1, 2, 'aho', 4, 'bow', ...]`）
 * 5. 3と4の条件を同時に満たす場合、アホな犬になる（例: `[ ..., 13, 14, 'ahobow', 16, ...]`）
 */

export const nabeatsu = (len: number = 1): Array<number | string> | string => {
  if (len === 0) {
    return ['世界のなべあつ']
  } if (len < 0) {
    return ['自然数を入力してください']
  }
  const fizzbuzzArray: Array<number | string> = []
  for (let count = 1; count <= len; count++) {
    const aho = count % 3 === 0 || count.toString().includes('3')
    const bow = count % 5 === 0
    if (aho && bow) {
      fizzbuzzArray.push('ahobow')
    } else if (bow) {
      fizzbuzzArray.push('bow')
    } else if (aho) {
      fizzbuzzArray.push('aho')
    } else {
      fizzbuzzArray.push(count)
    }
    // if ((count % 3 === 0 || count.toString().includes('3')) && count % 5 === 0) {
    //     fizzbuzzArray.push('ahobow')
    // } else if (count % 5 === 0) {
    //     fizzbuzzArray.push('bow')
    // } else if (count % 3 == 0||count.toString().includes('3')) {
    //     fizzbuzzArray.push('aho')
    // } else {
    //     fizzbuzzArray.push(count)
    // }

    /* 自分政策 */
    // let st =''
    // if (count % 3 == 0 || count.toString().includes('3')) st += 'aho'
    // if (count % 5 == 0) st += 'bow'

    // if (st.length == 0) {
    //     fizzbuzzArray.push(count)
    //     continue
    // }
    // fizzbuzzArray.push(st)
  }

  return fizzbuzzArray
}
