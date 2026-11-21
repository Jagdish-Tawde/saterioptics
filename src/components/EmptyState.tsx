import { SearchX } from 'lucide-react'

export function EmptyState({ reset }: { reset: () => void }) {
  return <div className="empty-state"><SearchX size={34} aria-hidden="true" /><h2>No matching products</h2><p>Try a different product name or code, or clear your filters.</p><button className="button secondary" type="button" onClick={reset}>Clear filters</button></div>
}
