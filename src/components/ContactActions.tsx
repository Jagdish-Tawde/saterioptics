import { MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business } from '../config/business'
import { phoneUrl, whatsappUrl } from '../utils/contact'

export const greeting = `Hello ${business.name}, I'd like to enquire about your in-store services.`

export function WhatsAppAction({ label, message = greeting, className = 'button secondary', fallback }: {
  label: string
  message?: string
  className?: string
  fallback?: string
}) {
  const url = whatsappUrl(business.whatsapp, message)
  if (!url) return fallback ? <Link className={className} to="/contact">{fallback}</Link> : null
  return <a className={className} href={url} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" />{label}</a>
}

export function CallAction() {
  const url = phoneUrl(business.phone)
  return url ? <a className="button primary" href={url}><Phone size={18} aria-hidden="true" /> Call the store</a> : null
}
