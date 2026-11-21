import { Link } from 'react-router-dom'
import { Camera, MapPin } from 'lucide-react'
import { business } from '../config/business'
import { PageIntro } from '../components/PageIntro'
import { SafeImage } from '../components/SafeImage'

export function About() {
  const photos = [{ title: 'Our store', src: business.storePhoto }, { title: 'Our team', src: business.teamPhoto }]
  return <>
    <PageIntro title={`About ${business.name}`}>A local optical shop for eye-power checks, prescription spectacles, frame fitting and sunglasses.</PageIntro>
    <section className="section"><div className="container about-grid">
      <div>
        <div className="section-heading"><h2>Our story</h2><p className="preserve-lines">{business.story || `${business.name} has been serving customers since ${business.establishedYear}. Visit our shop in ${business.locality}, ${business.city}, for eye-power testing, prescription spectacles, frames and sunglasses.`}</p></div>
        <h2 className="subheading">What to expect in store</h2>
        <p>Bring your prescription or ask about an eye-power check. You can try on frames, compare how they sit and discuss which lenses suit your prescription and daily routine.</p>
        <p className="mt-4">When your spectacles are ready, you can check the fit in store. If you’re choosing sunglasses, you can compare styles and fit before deciding.</p>
        <Link to="/contact" className="button primary mt-6"><MapPin size={18} aria-hidden="true" /> Plan your visit</Link>
      </div>
      <div className="photo-grid">{photos.map(({ title, src }) => <figure key={title} className="about-photo">
        {src ? <SafeImage src={src} alt={`${business.name} — ${title.toLowerCase()}`} /> : <div className="image-empty"><Camera aria-hidden="true" /><span>Photo coming soon</span></div>}
        <figcaption>{title}</figcaption>
      </figure>)}</div>
    </div></section>
  </>
}
