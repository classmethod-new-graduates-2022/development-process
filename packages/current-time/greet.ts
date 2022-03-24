/* eslint-disable yoda */
export const greet = (): 'おはようございます' | 'こんにちは' | 'こんばんは' => {
  const now = new Date()

  if (5 <= now.getHours() && now.getHours() < 12) {
    return 'おはようございます'
  }

  if (12 <= now.getHours() && now.getHours() < 18) {
    return 'こんにちは'
  }

  return 'こんばんは'
}
