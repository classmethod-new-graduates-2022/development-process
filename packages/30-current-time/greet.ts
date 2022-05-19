type Greeting = 'おはようございます' | 'こんにちは' | 'こんばんは'

// 純粋な処理（現在日次取得以外の部分）を切り出す
export const judgeGreeting = (now: Date): Greeting => {
  if (now.getHours() >= 5 && now.getHours() < 12) {
    return 'おはようございます'
  }

  if (now.getHours() >= 12 && now.getHours() < 18) {
    return 'こんにちは'
  }

  return 'こんばんは'
}

export const greet = (): Greeting => {
  const now = new Date()

  return judgeGreeting(now)
}
