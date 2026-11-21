import { URL, fileURLToPath } from 'node:url'
import { loadEnv } from 'vite'
import { readFile, writeFile } from 'node:fs/promises'
import { createBusinessConfig } from '../src/config/business.ts'
import { pages } from '../src/config/pages.ts'
import { siteUrl } from '../src/utils/seo.ts'
import { phoneUrl } from '../src/utils/contact.ts'

const projectRoot = fileURLToPath(new URL('../', import.meta.url))
const business = createBusinessConfig(loadEnv('production', projectRoot, 'VITE_BUSINESS_'))
const publicUrl = (path) => siteUrl(path, business.websiteUrl)

const dist = new URL('../dist/', import.meta.url)
const index = new URL('index.html', dist)
const template = await readFile(index, 'utf8')
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
const meta = (attr, key, value) => `<meta data-static-seo ${attr}="${key}" content="${escape(value)}" />`
const image = publicUrl('/images/boutique-hero.webp')
const phone = phoneUrl(business.phone)

// A complete, confirmed location is required before emitting LocalBusiness markup.
const localBusiness = business.address && business.city && business.state && business.postalCode ? {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: business.name,
  ...(publicUrl('/') && { url: publicUrl('/') }),
  ...(phone && { telephone: phone.slice(4) }),
  ...(business.mapsUrl && { hasMap: business.mapsUrl }),
  address: {
    '@type': 'PostalAddress',
    streetAddress: [business.address, business.locality].filter(Boolean).join(', '),
    addressLocality: business.city,
    addressRegion: business.state,
    postalCode: business.postalCode,
    addressCountry: 'IN',
  },
} : undefined

for (const { path, title, description } of pages) {
  const canonical = publicUrl(path)
  const fullTitle = `${title} | ${business.name}`
  const tags = [
    `<title data-static-seo>${escape(fullTitle)}</title>`,
    meta('name', 'description', description),
    meta('property', 'og:type', 'website'),
    meta('property', 'og:locale', 'en_IN'),
    meta('property', 'og:site_name', business.name),
    meta('property', 'og:title', fullTitle),
    meta('property', 'og:description', description),
  ]
  if (image) tags.push(meta('property', 'og:image', image))
  if (canonical) {
    tags.push(meta('property', 'og:url', canonical))
    tags.push(`<link data-static-seo rel="canonical" href="${escape(canonical)}" />`)
  }
  if (path === '/' && localBusiness) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(localBusiness).replaceAll('<', '\\u003c')}</script>`)
  }
  const file = path === '/' ? index : new URL(`.${path}.html`, dist)
  await writeFile(file, template.replace(/<title>.*?<\/title>/, () => tags.join('\n    ')))
}

const urls = pages.map(({ path }) => publicUrl(path)).filter(Boolean)
const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map((url) => `  <url><loc>${escape(url)}</loc></url>\n`).join('') +
  '</urlset>\n'
await writeFile(new URL('sitemap.xml', dist), sitemap)
const sitemapUrl = publicUrl('/sitemap.xml')
await writeFile(new URL('robots.txt', dist), `User-agent: *\nAllow: /\n${sitemapUrl ? `Sitemap: ${sitemapUrl}\n` : ''}`)
