import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, search, hash } = useLocation()
  const navigationSearch = pathname === '/collection' ? '' : search
  const mounted = useRef(false)
  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null
    if (target) {
      target.scrollIntoView()
      target.focus({ preventScroll: true })
      mounted.current = true
      return
    }
    window.scrollTo(0, 0)
    if (mounted.current) document.getElementById('main-content')?.focus({ preventScroll: true })
    mounted.current = true
  }, [pathname, navigationSearch, hash])
  return null
}
