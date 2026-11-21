import { business } from '../config/business'
import { siteUrl } from '../utils/seo'

export function SEO({ title, description, path }: { title: string; description: string; path?: string }) {
  const fullTitle = `${title} | ${business.name}`
  const canonical = path !== undefined ? siteUrl(path) : undefined
  const image = siteUrl('/images/boutique-hero.webp')
  return <>
    <title>{fullTitle}</title>
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:site_name" content={business.name} />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    {image && <meta property="og:image" content={image} />}
    {canonical && <meta property="og:url" content={canonical} />}
    {canonical && <link rel="canonical" href={canonical} />}
    {path === undefined && <meta name="robots" content="noindex" />}
  </>
}
