import { MessageCircle } from 'lucide-react'
import type { SubmitEvent } from 'react'
import { useState } from 'react'
import { business } from '../config/business'
import type { Product } from '../types/product'
import { phoneUrl, whatsappUrl } from '../utils/contact'

const topics = ['Eye testing', 'Prescription spectacles', 'Frames and lenses', 'Contact lenses', 'Sunglasses', 'Store visit', 'Other']

export function ContactForm({ product }: { product?: Product }) {
  const [error, setError] = useState('')
  const [prepared, setPrepared] = useState('')
  const canSend = Boolean(whatsappUrl(business.whatsapp, ''))
  const productLine = product ? `${product.name} (${product.id})${product.demo ? ' — demo style' : ''}` : ''

  function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const topic = String(data.get('topic') ?? '')
    const message = String(data.get('message') ?? '').trim()

    setPrepared('')
    if (!name || !phoneUrl(phone) || !topics.includes(topic) || !message) {
      setError('Enter your name, a valid phone number and a message, then select an enquiry type.')
      return
    }

    const lines = [`Hello ${business.name}, I have an enquiry.`, `Name: ${name}`, `Phone: ${phone}`, `Enquiry: ${topic}`]
    if (productLine) lines.push(`Product: ${productLine}`)
    lines.push(`Message: ${message}`)
    const url = whatsappUrl(business.whatsapp, lines.join('\n'))
    if (!url) {
      setError('WhatsApp contact details are coming soon.')
      return
    }

    setError('')
    setPrepared(url)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return <div className="contact-card">
    <h2>Send an enquiry</h2>
    <p id="whatsapp-instructions">The form opens a draft in WhatsApp. Your message is sent only when you confirm it in WhatsApp. Please leave out prescriptions and personal health information.</p>
    {productLine && <p className="notice">Enquiring about {productLine}</p>}
    {!canSend && <p className="notice" id="whatsapp-unavailable">WhatsApp contact details are coming soon. The enquiry form will be available once the store’s WhatsApp number is added.</p>}
    <form onSubmit={submit} aria-describedby={canSend ? 'whatsapp-instructions' : 'whatsapp-instructions whatsapp-unavailable'}>
      <fieldset disabled={!canSend} className="form-fields">
        <legend className="sr-only">Enquiry details</legend>
        <div className="form-row">
          <label>Your name<input name="name" autoComplete="name" required maxLength={100} /></label>
          <label>Phone number<input name="phone" type="tel" inputMode="tel" autoComplete="tel" required maxLength={25} /></label>
        </div>
        <label>Enquiry type<select name="topic" required defaultValue={product ? (product.category === 'optical' ? 'Frames and lenses' : 'Sunglasses') : ''}><option value="" disabled>Select an enquiry type</option>{topics.map((topic) => <option key={topic}>{topic}</option>)}</select></label>
        <label>Message<textarea name="message" required rows={4} maxLength={600} /></label>
        {error && <p role="alert" className="form-error">{error}</p>}
        <button className="button primary" type="submit"><MessageCircle size={18} aria-hidden="true" /> Open WhatsApp</button>
      </fieldset>
      {prepared && <p role="status" className="mt-4">Your draft is ready. <a className="text-link" href={prepared} target="_blank" rel="noopener noreferrer">Open the WhatsApp draft</a> if the window didn’t open.</p>}
    </form>
  </div>
}
