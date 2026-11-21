import type { ProductFilter } from '../types/product'

const categories: { value: ProductFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'optical', label: 'Optical Frames' },
  { value: 'sunglasses', label: 'Sunglasses' },
]

export function ProductFilters({ current, onChange }: { current: ProductFilter; onChange: (value: ProductFilter) => void }) {
  return <div className="filters" role="group" aria-label="Filter by product category">
    {categories.map(({ value, label }) => <button key={value} type="button" onClick={() => onChange(value)} aria-pressed={current === value}>{label}</button>)}
  </div>
}
