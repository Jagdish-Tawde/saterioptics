import { useState } from 'react'
import { ImageOff } from 'lucide-react'

export function SafeImage({ src, alt, eager = false }: { src: string; alt: string; eager?: boolean }) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  if (failed || !src) return <div className="image-empty" role="img" aria-label={`${alt}. Image unavailable.`}><ImageOff size={27} aria-hidden="true" /><span>Image unavailable</span></div>
  return <div className="image-loading" data-loaded={loaded}>
    <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />
  </div>
}
