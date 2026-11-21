import { SafeImage } from './SafeImage'

export const services = [
  { id: 'eye-testing', title: 'Eye Testing', marathiTitle: 'डोळ्यांची तपासणी', summary: 'Get your spectacle power checked in store.', image: '/images/editorial/eye-testing.webp', alt: 'Close-up of eye-testing equipment' },
  { id: 'prescription-spectacles', title: 'Prescription Spectacles', marathiTitle: 'नंबरचे चष्मे', summary: 'Use your in-store results or bring your own prescription.', image: '/images/editorial/prescription.webp', alt: 'Clear prescription lenses beside an amber frame' },
  { id: 'frame-fitting', title: 'Frame Selection & Fitting', marathiTitle: 'फ्रेमची निवड आणि फिटिंग', summary: 'Try on different frames and check the fit when you collect your glasses.', image: '/images/editorial/fitting.webp', alt: 'Hands adjusting the fit of a spectacle frame' },
]

export function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return <article className="service-card reveal">
    <figure className="service-photo editorial-photo">
      <SafeImage src={service.image} alt={service.alt} />
      <figcaption>Illustrative image</figcaption>
    </figure>
    <div className="service-copy">
      <h3>{service.title}</h3>
      <p className="service-translation" lang="mr">{service.marathiTitle}</p>
      <p>{service.summary}</p>
    </div>
  </article>
}
