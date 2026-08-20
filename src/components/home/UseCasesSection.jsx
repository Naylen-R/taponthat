import { SectionContainer, SectionHeading } from '../ui/SectionContainer'
import { UseCaseCard } from './UseCaseCard'
import { Reveal } from '../ui/Reveal'

function IconCalendar(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
      <line x1="8" y1="3" x2="8" y2="7" strokeLinecap="round" />
      <line x1="16" y1="3" x2="16" y2="7" strokeLinecap="round" />
    </svg>
  )
}
function IconGlobe(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <ellipse cx="12" cy="12" rx="3.6" ry="8.5" />
      <line x1="3.5" y1="12" x2="20.5" y2="12" />
    </svg>
  )
}
function IconContact(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" strokeLinecap="round" />
    </svg>
  )
}
function IconMenuDest(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <line x1="5" y1="7" x2="19" y2="7" strokeLinecap="round" />
      <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
      <line x1="5" y1="17" x2="13" y2="17" strokeLinecap="round" />
    </svg>
  )
}

const useCases = [
  {
    icon: IconCalendar,
    title: 'Appointments & Booking',
    description: 'Tap → your booking page opens instantly.',
  },
  {
    icon: IconGlobe,
    title: 'Business Websites',
    description: 'Tap → your website, front and centre.',
  },
  {
    icon: IconContact,
    title: 'Social / Contact Sharing',
    description: 'Tap → your profile or contact card.',
  },
  {
    icon: IconMenuDest,
    title: 'Menus & Digital Destinations',
    description: 'Tap → any digital page you choose.',
  },
]

export function UseCasesSection() {
  return (
    <SectionContainer className="bg-mist py-16 sm:py-20 lg:py-24 rounded-none">
      <Reveal>
        <SectionHeading eyebrow="Use Cases" title="One tap. Many destinations." align="left" />
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {useCases.map((uc, i) => (
          <Reveal key={uc.title} delay={i * 0.05}>
            <UseCaseCard {...uc} />
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  )
}
