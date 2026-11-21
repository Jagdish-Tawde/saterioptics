import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { business } from '../config/business'
import { SafeImage } from './SafeImage'

export function Hero() {
  return <section className="hero">
    <div className="container hero-grid">
      <div className="hero-copy">
        <span className="eyebrow"><MapPin size={16} aria-hidden="true" /> {[business.locality, business.city].filter(Boolean).join(', ')}</span>
        <h1>See the world<br /><em>beautifully.</em></h1>
        <p className="hero-marathi" lang="mr">{business.marathiTagline}</p>
        <p>Get your eyes tested, have prescription spectacles made, and try on optical frames and sunglasses in store.</p>
        <div className="actions">
          <Link className="button primary" to="/collection">Explore Collection</Link>
          <Link className="button secondary" to="/services">Eye Testing &amp; Services</Link>
        </div>
      </div>
      <figure className="hero-photo editorial-photo">
        <SafeImage src="/images/boutique-hero.webp" alt="Tortoiseshell optical frames photographed on warm limestone" eager />
        <figcaption>Illustrative image</figcaption>
      </figure>
    </div>
  </section>
}
