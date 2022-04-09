import { expect, test } from 'vitest'
import { fetchProductPriceWithDiscountAndTax } from './fetch-product-price-with-discount-and-tax'

test('商品Noから消費税込みの値段を取得する', async () => {
  const result = await fetchProductPriceWithDiscountAndTax([
    '0001',
    '0002',
    '0003',
  ])
  expect(result).toBe(110)
})
