# 日時に依存したコードのテスト

`greet.ts` の実装を変更して、vitest のモック機能や `useFakeTimers()` を使わずに、
`greet()` のテストコードを完成させよう。

上記ができたら、`greet.ts` の実装は変更せずに、モック機能や `useFakeTimers()` を使ったテストコードも書いてみよう。

## テストの実行方法

```console
npx vitest packages/30-current-time/
```

## キーワード

- 参照透過性

## 余談

モックツールの使いすぎはコード品質向上の機会を損失する、という考え方があります。

参考：https://speakerdeck.com/twada/test-driven-architecture-aws-dev-day-tokyo-2018?slide=51
