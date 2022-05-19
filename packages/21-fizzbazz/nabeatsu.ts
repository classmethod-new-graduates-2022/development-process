/*
 * fizzbazzを書いてみよう
 * 要件
 * 1. 入力された長さの配列を返す
 * 2. 配列は1から始まり、1ずつ増えて行く（例: `[1, 2, ....]`）
 * 3. '3'がつく数字と3の倍数でアホになる（例: `[1, 2, 'aho', 4, ...]`）
 * 4. 5の倍数で犬になる（例: `[1, 2, 'aho', 4, 'bow', ...]`）
 * 5. 3と4の条件を同時に満たす場合、アホな犬になる（例: `[ ..., 13, 14, 'ahobow', 16, ...]`）
 */
/*
1. 整数ではない文字が入力された場合は、小数点以下を切り捨てる
1. 0 が入力された場合は、「世界のなべあつ」と返す
1. 負の整数が入力された場合は、「自然数を入力してください」と返す
1. 開始する数字を 1 ではなく 0 とする。
1. 最初の数字を第２引数で指定できる。指定しない場合は 0 から数える。
*/
// 35はahobow？

export const nabeatsu = (len: number, startNum: number = 0) => {
  // startNumが入力されなかった場合
  // 関数パラメータの変更による意図しない動作を予防、を回避したい
  // startNum = (typeof startNum !== 'undefined') ?  startNum : 0;

  if (len === 0) {
    return '世界のなべあつ'
  } if (len < 0) {
    return '自然数を入力してください'
  }
  // } else if(Number.isInteger(len) !== true) {
  //     //関数パラメータの変更による意図しない動作を予防、を回避したい
  //     len = Math.floor(len);
  // }
  const flooredLen = Math.floor(len)
  const ahoArray: any[] = []

  for (let num = startNum; num <= startNum + flooredLen - 1; num++) {
    const strNum = num.toString()
    const checkStrNum = strNum.includes('3') // 3を含むかどうか

    if (num === 0) {
      ahoArray.push(0)
    } else if (
      (num % 3 === 0 && num % 5 === 0) ||
      (checkStrNum === true && num % 5 === 0)
    ) {
      ahoArray.push('ahobow')
    } else if (num % 3 === 0 || checkStrNum === true) {
      ahoArray.push('aho')
    } else if (num % 5 === 0) {
      ahoArray.push('bow')
    } else {
      ahoArray.push(num)
    }
  }
  return ahoArray
}
