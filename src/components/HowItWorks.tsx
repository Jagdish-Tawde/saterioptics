import { ClipboardList, Focus, Glasses, Ruler } from 'lucide-react'

const steps = [
  { icon: ClipboardList, title: 'Eye Test or Bring Prescription', description: 'Get your power checked or bring your current prescription.' },
  { icon: Glasses, title: 'Choose Your Frames', description: 'Try on styles and sizes to see what feels right.' },
  { icon: Focus, title: 'Select Your Lenses', description: 'Discuss lens options for your prescription and routine.' },
  { icon: Ruler, title: 'Final Fitting', description: 'Check the fit when you collect your spectacles.' },
]

export function HowItWorks() {
  return <section className="section process-section" aria-labelledby="process-heading">
    <div className="container">
      <div className="section-heading"><h2 id="process-heading">How it works</h2></div>
      <ol className="steps" role="list">
        {steps.map(({ title, description, icon: Icon }, index) => (
          <li key={title}>
            <span className="step-marker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <div><h3><Icon size={17} aria-hidden="true" />{title}</h3><p>{description}</p></div>
          </li>
        ))}
      </ol>
    </div>
  </section>
}
