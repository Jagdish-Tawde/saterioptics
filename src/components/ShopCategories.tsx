import { Link } from 'react-router-dom'
import { SafeImage } from './SafeImage'
import type { ProductCategory } from '../types/product'

const categories: { id: ProductCategory; title: string; description: string; image: string; alt: string }[] = [
  { id: 'optical', title: 'Optical Frames', description: 'From slim silhouettes to bold everyday frames.', image: '/images/hero.webp', alt: 'Tortoiseshell optical frames on a muted green display block' },
  { id: 'sunglasses', title: 'Sunglasses', description: 'Find a shape and fit for your time outdoors.', image: '/images/editorial/sunglasses.webp', alt: 'Dark-lens sunglasses on folded teal linen' },
]

export function ShopCategories() {
  return <section className="section category-section" aria-labelledby="category-heading">
    <div className="container">
      <div className="section-heading"><h2 id="category-heading">Shop by category</h2></div>
      <div className="category-grid">
        {categories.map(({ id, title, description, image, alt }) => (
          <article className="category-card reveal" key={id}>
            <Link to={`/collection?category=${id}`} aria-label={`Explore ${title}`} className="category-link">
            <figure className="category-photo editorial-photo">
              <SafeImage src={image} alt={alt} />
              <figcaption>Illustrative image</figcaption>
            </figure>
            <div className="category-copy">
              <div><h3>{title}</h3><p>{description}</p></div>
              <span className="button secondary" aria-hidden="true">Explore</span>
            </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
}
