import { Clock, MapPin, MessageCircle, Phone, Camera } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { PageIntro } from '../components/PageIntro'
import { CallAction, WhatsAppAction } from '../components/ContactActions'
import { ContactForm } from '../components/ContactForm'
import { business, storeAddress, storeMapsUrl } from '../config/business'
import { products } from '../data/products'
import { phoneUrl, whatsappUrl } from '../utils/contact'

export function Contact() {
  const [params] = useSearchParams()
  const product = products.find(({ id }) => id === params.get('product'))
  const phone = phoneUrl(business.phone)
  const whatsapp = whatsappUrl(business.whatsapp, '')
  const mapEmbed = /^https:\/\/(?:www\.)?google\.com\/maps\/embed(?:\?|\/)/.test(business.mapsEmbedUrl) ? business.mapsEmbedUrl : ''

  const details = [
    { label: 'Address', icon: MapPin, value: storeAddress },
    { label: 'Phone', icon: Phone, value: business.phone, href: phone },
    ...(business.alternatePhone ? [{ label: 'Alternate phone', icon: Phone, value: business.alternatePhone, href: phoneUrl(business.alternatePhone) }] : []),
    { label: 'WhatsApp', icon: MessageCircle, value: business.whatsapp, href: whatsapp },
    { label: 'Opening hours', icon: Clock, value: business.openingHours },
  ]

  return <>
    <PageIntro title="Contact & Visit">Find store information or enquire about eye testing, spectacles, frames and sunglasses.</PageIntro>
    <section className="section"><div className="container contact-grid">
      <div className="contact-card">
        <h2>{business.name}</h2>
        <dl className="contact-details">{details.map(({ label, icon: Icon, value, href }) => <div key={label}>
          <dt><Icon size={19} aria-hidden="true" /> {label}</dt>
          <dd className="preserve-lines">{href ? <a href={href}>{value}</a> : value || 'Details coming soon'}{label === 'Address' && business.landmark && <span className="block">{business.landmark}</span>}</dd>
        </div>)}</dl>
        <div className="actions"><CallAction /><WhatsAppAction label="Enquire on WhatsApp" /></div>
        <div className="actions mt-4">
          {storeMapsUrl && <a className="button secondary" href={storeMapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={18} aria-hidden="true" /> Open in Google Maps</a>}
          {business.instagramUrl && <a className="button secondary" href={business.instagramUrl} target="_blank" rel="noopener noreferrer"><Camera size={18} aria-hidden="true" /> Instagram</a>}
        </div>
        {mapEmbed ? <iframe className="map" title={`Google Maps for ${business.name}`} src={mapEmbed} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> :
          !storeMapsUrl && <div className="map map-placeholder"><MapPin size={28} aria-hidden="true" /><span>Store map coming soon</span></div>}
      </div>
      <ContactForm key={product?.id ?? 'general'} product={product} />
    </div></section>
  </>
}
