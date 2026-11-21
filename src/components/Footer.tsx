import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, storeAddress, storeMapsUrl } from '../config/business'
import { pages } from '../config/pages'
import { phoneUrl } from '../utils/contact'
import { Brand } from './Navbar'
import { services } from './ServiceCard'
import { WhatsAppAction } from './ContactActions'

export function Footer() {
  const phones = [business.phone, business.alternatePhone]
    .map((number) => ({ number, href: phoneUrl(number) }))
    .filter(({ href }) => href)

  return <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <Brand />
          <p>{business.tagline}</p>
          <p lang="mr">{business.marathiTagline}</p>
        </div>
        <div>
          <h2>Quick links</h2>
          <ul>{pages.map(({ path, label }) => <li key={path}><Link to={path}>{label}</Link></li>)}</ul>
        </div>
        <div>
          <h2>In-store services</h2>
          <ul>{services.map(({ id, title }) => <li key={id}><Link to={`/services#${id}`}>{title}</Link></li>)}</ul>
          {business.instagramUrl && <a className="footer-link" href={business.instagramUrl}>Instagram</a>}
          {business.facebookUrl && <a className="footer-link" href={business.facebookUrl}>Facebook</a>}
        </div>
        <div>
          <h2>Visit the store</h2>
          {storeAddress && <address>{storeAddress}</address>}
          {phones.map(({ href, number }) => <a className="footer-link" key={number} href={href}>{number}</a>)}
          <p className="footer-hours"><strong>Opening hours</strong><br />{business.openingHours || 'Call for current hours'}</p>
          <WhatsAppAction label="WhatsApp the store" className="footer-link" />
          {storeMapsUrl && <a className="footer-link" href={storeMapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={17} aria-hidden="true" /> Directions</a>}
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} {business.name}</div>
    </div>
  </footer>
}
