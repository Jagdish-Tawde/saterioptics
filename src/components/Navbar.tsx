import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MapPin, Menu, X } from 'lucide-react'
import { business } from '../config/business'
import { pages } from '../config/pages'

export function Brand({ onClick }: { onClick?: () => void }) {
  return <Link className="brand" to="/" onClick={onClick}>
    <img src="/images/mark.svg" alt="" width="44" height="44" />
    <span>{business.name}<small>Optical store</small></span>
  </Link>
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return <header className="site-header">
    <div className="container nav-inner">
      <Brand onClick={() => setOpen(false)} />
      <button ref={toggle} type="button" className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav id="main-nav" aria-label="Primary" className={open ? 'nav-links is-open' : 'nav-links'}>
        {pages.map(({ path, label }) => <NavLink key={path} to={path} end onClick={() => setOpen(false)}>{label}</NavLink>)}
        <Link className="button primary mobile-visit" to="/contact" onClick={() => setOpen(false)}><MapPin size={17} aria-hidden="true" /> Visit Store</Link>
      </nav>
      <Link to="/contact" className="button primary nav-visit"><MapPin size={17} aria-hidden="true" /> Visit Store</Link>
    </div>
  </header>
}
