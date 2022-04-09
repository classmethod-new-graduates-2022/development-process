import { expect, test } from 'vitest'
import { fetchProductPriceWithTax } from './fetch-product-price-with-tax'

test('商品Noから消費税込みの値段を取得する', async () => {
  const result = await fetchProductPriceWithTax('0001')
  expect(result).toBe(110)
})
