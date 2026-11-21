import type { ReactNode } from 'react'

export function PageIntro({ title, children }: { title: string; children: ReactNode }) {
  return <section className="page-intro"><div className="container"><h1>{title}</h1><p>{children}</p></div></section>
}
