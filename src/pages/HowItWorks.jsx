import { SectionContainer, SectionHeading } from '../components/ui/SectionContainer'
import { CTAButton } from '../components/ui/CTAButton'
import { Reveal } from '../components/ui/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'

const steps = [
  {
    number: '01',
    title: 'Choose your TapOnThat card',
    description: 'Pick the Book Now Card, or start a custom design for your business.',
  },
  {
    number: '02',
    title: 'Your destination is configured',
    description: 'We program the card to open the page you want — a booking page, website, menu, social profile, or contact card.',
  },
  {
    number: '03',
    title: 'A compatible phone taps the card',
    description: 'No app needed. A quick tap with a compatible smartphone is all it takes.',
  },
  {
    number: '04',
    title: 'The destination opens',
    description: 'Your chosen page opens instantly in the browser — done.',
  },
]

export default function HowItWorks() {
  usePageMeta({
    title: 'How It Works — TapOnThat',
    description: 'How TapOnThat NFC cards work: choose a card, set a destination, tap with a smartphone, and the page opens instantly.',
  })

  return (
    <>
      <SectionContainer className="pt-14 pb-10 text-center sm:pt-20 sm:pb-16">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How It Works"
            title="From tap to destination — in seconds."
            description="No technical setup for the person tapping. Just a phone, a card, and the page you chose."
          />
        </Reveal>
      </SectionContainer>

      <SectionContainer className="pb-16 sm:pb-24">
        <div className="mx-auto flex max-w-2xl flex-col gap-10">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.06} className="flex gap-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                {step.number}
              </span>
              <div>
                <h2 className="text-lg font-semibold text-ink">{step.title}</h2>
                <p className="mt-1.5 text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-mist py-16 text-center sm:py-20">
        <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-6">
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">Ready to try it yourself?</h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CTAButton to="/shop">Shop Book Now</CTAButton>
            <CTAButton to="/custom-orders" variant="secondary">
              Custom Orders
            </CTAButton>
          </div>
        </Reveal>
      </SectionContainer>
    </>
  )
}
