import { MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '../types/product'
import { business } from '../config/business'
import { whatsappUrl } from '../utils/contact'
import { SafeImage } from './SafeImage'

const rupees = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2, minimumFractionDigits: 0 })

export function ProductCard({ product }: { product: Product }) {
  const { name, id, image, price, available, frameShape, color, demo, category } = product
  const message = `Hello ${business.name}, I'd like to enquire about ${name} (${id})${demo ? ' from your demo collection. Do you have a similar style in store?' : '.'}`
  const enquiry = whatsappUrl(business.whatsapp, message)
  const enquireLabel = `Enquire about ${name} (${id})`
  return <article className="product-card">
    <div className="product-photo">
      <SafeImage key={image} src={image} alt={`${demo ? 'Demo image of ' : ''}${name}, ${color ? color.toLowerCase() + ' ' : ''}${category === 'optical' ? 'optical frame' : 'sunglasses'}`} />
      {demo && <span className="demo-badge">DEMO DATA</span>}
    </div>
    <div className="product-content">
      <p className="product-code">{id}{frameShape ? ` · ${frameShape}` : ''}</p>
      <h3>{name}</h3>
      {product.description && <p>{product.description}</p>}
      <div className="product-price">{price === undefined ? 'Ask for Price' : <>{rupees.format(price)} {demo && <small>Sample price</small>}</>}</div>
      <p className="availability">{demo ? (available ? 'Sample: available' : 'Sample: unavailable') : (available ? 'Available in store' : 'Currently unavailable')}</p>
      {enquiry ? <a className="button product-button" aria-label={`${enquireLabel} on WhatsApp`} href={enquiry} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} aria-hidden="true" /> WhatsApp</a> :
        <Link className="button product-button" aria-label={enquireLabel} to={`/contact?${new URLSearchParams({ product: id })}`}>Enquire</Link>}
    </div>
  </article>
}
