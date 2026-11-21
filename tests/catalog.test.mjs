import { URL } from 'node:url'
import assert from 'node:assert/strict'
import { test } from 'node:test'
import { products } from '../src/data/products.ts'
import { filterProducts } from '../src/utils/products.ts'
import { whatsappUrl, phoneUrl } from '../src/utils/contact.ts'

test('demo record counts and unique codes', () => {
  assert.equal(products.length, 20)
  assert.equal(new Set(products.map(({ id }) => id)).size, 20)
  assert.ok(products.every(({ demo }) => demo))
  assert.equal(filterProducts(products, 'optical', '').length, 12)
  assert.equal(filterProducts(products, 'sunglasses', '').length, 8)
})

test('search combines the category with case-insensitive name or code matching', () => {
  assert.deepEqual(filterProducts(products, 'all', '  of-001 ').map(({ id }) => id), ['OF-001'])
  assert.deepEqual(filterProducts(products, 'sunglasses', 'aviator').map(({ id }) => id), ['SG-001', 'SG-006'])
  assert.deepEqual(filterProducts(products, 'optical', 'SG-001'), [])
})

test('WhatsApp URL preserves line breaks, punctuation and Marathi text', () => {
  const message = 'Hello!\nFrames & goggles? नमस्कार'
  const result = new URL(whatsappUrl('+91 (99999) 00000', message))
  assert.equal(result.origin, 'https://wa.me')
  assert.equal(result.pathname, '/919999900000')
  assert.equal(result.searchParams.get('text'), message)
  assert.equal(whatsappUrl('', message), undefined)
  assert.equal(whatsappUrl('99999abc00000', message), undefined)
  assert.equal(phoneUrl('+91 99999-00000'), 'tel:+919999900000')
})
