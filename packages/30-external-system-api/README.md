# 外部 API に依存したコードのテスト

`fetch-product-price-with-discount-and-tax.ts` の実装を変更して、vitest のモック機能を使わずに
`fetchProductPriceWithDiscountAndTax()` のテストコードを完成させよう。

上記ができたら、`greet.ts` の実装は変更せずに、モック機能や `useFakeTimers()` を使ったテストコードも書いてみよう。

## テストの実行方法

```console
npx vitest packages/30-external-system-api/
```
