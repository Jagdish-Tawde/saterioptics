import { MapPin, Store } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { ProductGrid } from '../components/ProductGrid'
import { SafeImage } from '../components/SafeImage'
import { ServiceCard, services } from '../components/ServiceCard'
import { ShopCategories } from '../components/ShopCategories'
import { business } from '../config/business'
import { products } from '../data/products'

export function Home() {
  const featured = [...products.filter((product) => product.category === 'optical').slice(0, 2), ...products.filter((product) => product.category === 'sunglasses').slice(0, 2)]

  return <>
    <Hero />
    <ShopCategories />
    <section className="section service-section" aria-labelledby="in-store-heading">
      <div className="container">
        <div className="section-heading split">
          <div>
            <h2 id="in-store-heading">Personal service, in store</h2>
            <p className="section-translation" lang="mr">दुकानातील सेवा</p>
          </div>
          <Link className="text-link" to="/services">View all services</Link>
        </div>
        <div className="service-grid">{services.map((service) => <ServiceCard key={service.id} service={service} />)}</div>
      </div>
    </section>
    <section className="section home-collection" aria-labelledby="featured-heading">
      <div className="container">
        <div className="section-heading split">
          <div><h2 id="featured-heading">Featured eyewear</h2><p>{featured.some(({ demo }) => demo) ? 'Demo styles and sample prices. Ask the store about current stock.' : 'A selection of optical frames and sunglasses.'}</p></div>
          <Link className="text-link" to="/collection">Browse the collection</Link>
        </div>
        <ProductGrid items={featured} />
      </div>
    </section>
    <HowItWorks />
    <section className="section store-section" aria-labelledby="store-heading">
      <div className="container why-grid">
        <figure className="store-photo editorial-photo reveal">
          {business.storePhoto
            ? <SafeImage src={business.storePhoto} alt={`The ${business.name} shop`} />
            : <div className="store-photo-placeholder"><Store size={58} strokeWidth={1} aria-hidden="true" /><span>Shop photo coming soon</span></div>}
        </figure>
        <div className="store-copy">
          <h2 id="store-heading">Why choose us?</h2>
          <p>{business.name} is a neighbourhood optical shop in {business.locality}, {business.city}.</p>
          <ul className="store-reasons" role="list">
            <li>Bring an outside prescription or get your spectacle power checked in store.</li>
            <li>Try on frames and discuss lens options before choosing.</li>
            <li>Check the fit of your glasses when you collect them.</li>
          </ul>
          <Link className="button primary" to="/contact"><MapPin size={17} aria-hidden="true" /> Visit Store</Link>
        </div>
      </div>
    </section>
  </>
}
