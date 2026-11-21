import { business } from '../config/business.ts'

export function siteUrl(path: string, websiteUrl = business.websiteUrl) {
  try {
    const site = new URL(websiteUrl)
    if (site.protocol === 'https:' || site.protocol === 'http:') return new URL(path, site).href
  } catch {
    return undefined
  }
}
