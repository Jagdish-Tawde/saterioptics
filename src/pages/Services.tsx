import { ClipboardList, Eye, Glasses, ScanLine, Sun } from 'lucide-react'
import { PageIntro } from '../components/PageIntro'
import { WhatsAppAction } from '../components/ContactActions'
import { business } from '../config/business'

const details = [
  { id: 'eye-testing', icon: Eye, title: 'Computerised eye-power testing', copy: 'An eye-power check measures the correction you may need in your spectacle lenses. Ask the store about arranging a check before selecting your frames.' },
  { icon: ClipboardList, title: 'Bring your own prescription', copy: 'If you already have a prescription from elsewhere, bring it to the store. We can use it to prepare your prescription spectacles.' },
  { id: 'prescription-spectacles', icon: Glasses, title: 'Prescription spectacles', copy: 'Choose a frame and discuss your prescription and lens requirements before your spectacles are made.' },
  { icon: ScanLine, title: 'Lens selection', copy: 'Lens choices can vary by prescription, frame compatibility and how you use your glasses. Ask the store which options are currently available and how they affect the final price.' },
  { id: 'frame-fitting', icon: Glasses, title: 'Frame selection and fitting', copy: 'Try different frames in store and check how your finished spectacles fit at collection.' },
  { icon: Sun, title: 'Sunglasses and goggles', copy: 'Try on sunglasses in store to compare frame shapes, coverage and fit.' },
]

export function Services() {
  return <>
    <PageIntro title="Eye Testing & Services">From an eye-power check to a finished pair of spectacles, here’s what you can do in store.</PageIntro>
    <section className="section"><div className="container inner-columns">
      <div className="stack">{details.map(({ id, title, copy, icon: Icon }) => <article className="detail-card" id={id} tabIndex={id ? -1 : undefined} key={title}>
        <span className="icon-box"><Icon aria-hidden="true" /></span><div><h2>{title}</h2><p>{copy}</p></div>
      </article>)}</div>
      <aside className="info-panel">
        <h2>Planning an eye-power check?</h2><p>Ask about availability before you visit. Bring your current prescription if you have one.</p>
        <WhatsAppAction label="Ask About Eye Testing" fallback="View contact details" message={`Hello ${business.name}, I'd like to ask about in-store eye-power testing.`} className="button primary" />
        <p className="disclaimer">For medical eye concerns, consult a qualified eye-care professional.</p>
      </aside>
    </div></section>
  </>
}
