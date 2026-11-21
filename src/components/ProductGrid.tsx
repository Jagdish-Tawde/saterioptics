import type { Product } from '../types/product'
import { ProductCard } from './ProductCard'

export function ProductGrid({ items }: { items: readonly Product[] }) {
  return <div className="product-grid">{items.map((product) => <ProductCard key={product.id} product={product} />)}</div>
}
