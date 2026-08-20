import { SectionContainer } from '../ui/SectionContainer'
import { BenefitCard } from './BenefitCard'
import { Reveal } from '../ui/Reveal'
import { IconNoApp, IconInstant, IconTap, IconReusable } from '../ui/icons'

const benefits = [
  {
    icon: IconNoApp,
    title: 'No App Required',
    description: 'The person tapping doesn’t need to install anything.',
  },
  {
    icon: IconInstant,
    title: 'Instant Access',
    description: 'The programmed destination opens in seconds.',
  },
  {
    icon: IconTap,
    title: 'Simple Tap',
    description: 'No typing long links or searching manually.',
  },
  {
    icon: IconReusable,
    title: 'Reusable',
    description: 'Keep using the card after setup — anytime.',
  },
]

export function BenefitsSection() {
  return (
    <SectionContainer className="py-16 sm:py-20">
      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.05}>
            <BenefitCard {...b} />
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  )
}
