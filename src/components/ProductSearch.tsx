import { Search, X } from 'lucide-react'

export function ProductSearch({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <div className="search">
    <label className="sr-only" htmlFor="product-search">Search by product name or code</label>
    <Search size={19} aria-hidden="true" />
    <input id="product-search" type="text" autoComplete="off" placeholder="Search name or code" value={value} onChange={(event) => onChange(event.target.value)} />
    {value && <button type="button" aria-label="Clear search" onClick={() => { onChange(''); document.getElementById('product-search')?.focus() }}><X size={18} aria-hidden="true" /></button>}
  </div>
}
