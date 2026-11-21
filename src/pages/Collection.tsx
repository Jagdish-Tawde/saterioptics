import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Info } from 'lucide-react'
import { SafeImage } from '../components/SafeImage'
import { ProductFilters } from '../components/ProductFilters'
import { ProductSearch } from '../components/ProductSearch'
import { ProductGrid } from '../components/ProductGrid'
import { EmptyState } from '../components/EmptyState'
import { products } from '../data/products'
import { filterProducts } from '../utils/products'
import type { ProductFilter } from '../types/product'

export function Collection() {
  const [params, setParams] = useSearchParams()
  const requested = params.get('category')
  const category: ProductFilter = requested === 'optical' || requested === 'sunglasses' ? requested : 'all'

  function setCategory(value: ProductFilter) {
    setParams((current) => {
      const next = new URLSearchParams(current)
      if (value === 'all') next.delete('category')
      else next.set('category', value)
      return next
    })
  }
  const [search, setSearch] = useState('')
  const items = filterProducts(products, category, search)

  function reset() {
    setCategory('all')
    setSearch('')
    document.getElementById('product-search')?.focus()
  }

  return <>
    <section className="catalog-hero">
      <div className="container catalog-hero-grid">
        <div>
          <h1>Frames &amp; <em>Sunglasses</em></h1>
          <p>Find a style you’d like to try. Ask us on WhatsApp what’s available in store.</p>
        </div>
        <figure className="catalog-hero-photo">
          <SafeImage src="/images/hero.webp" alt="Illustrative photograph of tortoiseshell optical frames" eager />
          <figcaption>Illustrative image</figcaption>
        </figure>
      </div>
    </section>
    <section className="section catalog-section" aria-label="Eyewear catalog">
      <div className="container">
        {products.some(({ demo }) => demo) && <div className="notice"><Info size={21} aria-hidden="true" /><p><strong>DEMO DATA.</strong> The images, prices and availability shown here are examples. Ask us about current stock and pricing.</p></div>}
        <div className="catalog-controls"><ProductFilters current={category} onChange={setCategory} /><ProductSearch value={search} onChange={setSearch} /></div>
        <div className="catalog-summary"><p role="status">{items.length} {items.length === 1 ? 'style' : 'styles'}</p><p>Prescription lenses may cost extra. Final price depends on lens selection and prescription.</p></div>
        {items.length ? <ProductGrid items={items} /> : <EmptyState reset={reset} />}
      </div>
    </section>
  </>
}
