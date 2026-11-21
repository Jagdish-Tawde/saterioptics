interface BusinessConfig {
  name: string
  tagline: string
  marathiTagline: string
  establishedYear: number
  locality: string
  phone: string
  alternatePhone: string
  whatsapp: string
  address: string
  landmark: string
  city: string
  state: string
  postalCode: string
  mapsUrl: string
  mapsEmbedUrl: string
  openingHours: string
  instagramUrl: string
  facebookUrl: string
  websiteUrl: string
  story: string
  storePhoto: string
  teamPhoto: string
}

type BusinessEnvKey =
  | 'VITE_BUSINESS_PHONE'
  | 'VITE_BUSINESS_ALTERNATE_PHONE'
  | 'VITE_BUSINESS_WHATSAPP'
  | 'VITE_BUSINESS_MAPS_URL'
  | 'VITE_BUSINESS_MAPS_EMBED_URL'
  | 'VITE_BUSINESS_INSTAGRAM_URL'
  | 'VITE_BUSINESS_FACEBOOK_URL'
  | 'VITE_BUSINESS_WEBSITE_URL'
  | 'VITE_BUSINESS_STORE_PHOTO'
  | 'VITE_BUSINESS_TEAM_PHOTO'

type BusinessEnv = Partial<Record<BusinessEnvKey, string>>

export function createBusinessConfig(env: BusinessEnv): BusinessConfig {
  return {
    name: 'Shree Sateri Optics',
    tagline: 'Your Vision, Our Priority.',
    marathiTagline: 'तुमची नजर, आमची काळजी!',
    establishedYear: 2005,
    locality: 'Jogeshwari East',
    phone: env.VITE_BUSINESS_PHONE?.trim() ?? '',
    alternatePhone: env.VITE_BUSINESS_ALTERNATE_PHONE?.trim() ?? '',
    whatsapp: env.VITE_BUSINESS_WHATSAPP?.trim() ?? '',
    address: 'A.M. Paradise, Shop No. 13, Station Road',
    landmark: 'Near Surana Hospital',
    city: 'Mumbai',
    state: 'Maharashtra',
    postalCode: '400060',
    mapsUrl: env.VITE_BUSINESS_MAPS_URL?.trim() ?? '',
    mapsEmbedUrl: env.VITE_BUSINESS_MAPS_EMBED_URL?.trim() ?? '',
    openingHours: '',
    instagramUrl: env.VITE_BUSINESS_INSTAGRAM_URL?.trim() ?? '',
    facebookUrl: env.VITE_BUSINESS_FACEBOOK_URL?.trim() ?? '',
    websiteUrl: env.VITE_BUSINESS_WEBSITE_URL?.trim() ?? '',
    story: '',
    storePhoto: env.VITE_BUSINESS_STORE_PHOTO?.trim() ?? '',
    teamPhoto: env.VITE_BUSINESS_TEAM_PHOTO?.trim() ?? '',
  }
}

export const business = createBusinessConfig((import.meta.env as BusinessEnv | undefined) ?? {})

export const storeAddress = [business.address, business.locality, business.city, business.state, business.postalCode]
  .filter(Boolean)
  .join(', ')

export const storeMapsUrl = business.mapsUrl || (business.address
  ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent([business.name, storeAddress].join(', '))}`
  : '')
