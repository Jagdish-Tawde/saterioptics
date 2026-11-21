import type { Product, ProductFilter } from '../types/product.ts'

export function filterProducts(products: readonly Product[], category: ProductFilter, search: string) {
  const query = search.trim().toLowerCase()
  return products.filter(({ id, name, category: productCategory }) =>
    (category === 'all' || category === productCategory) &&
    (name.toLowerCase().includes(query) || id.toLowerCase().includes(query)),
  )
}
