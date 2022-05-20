/* eslint-disable no-unused-vars */
/* eslint-disable yoda */
type Greet = (name: string) => string
export type NowFetcher = () => Date

export const buildGreet =
  (nowFetcher: NowFetcher): Greet =>
  (name: string) => {
    const now = nowFetcher()

    if (5 <= now.getHours() && now.getHours() < 12) {
      return `おはようございます${name}`
    }

    if (12 <= now.getHours() && now.getHours() < 18) {
      return `こんにちは${name}`
    }

    return `こんばんは${name}`
  }
