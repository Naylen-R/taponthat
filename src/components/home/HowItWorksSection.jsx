import { SectionContainer, SectionHeading } from '../ui/SectionContainer'
import { StepCard } from './StepCard'
import { Reveal } from '../ui/Reveal'

function ChooseVisual() {
  return (
    <div className="flex gap-3" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`h-16 w-11 rounded-[8px] transition-all ${
            i === 1 ? 'bg-ink ring-2 ring-ink ring-offset-2 ring-offset-mist scale-110' : 'bg-ink/25'
          }`}
        />
      ))}
    </div>
  )
}

function SetupVisual() {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <div className="h-12 w-[76px] rounded-[8px] bg-ink" />
      <svg width="36" height="12" viewBox="0 0 36 12" fill="none" className="text-ink/40">
        <line x1="0" y1="6" x2="30" y2="6" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1.6" />
        <path d="M26 2l6 4-6 4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 bg-white">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-ink">
          <path d="M12 3v12" strokeLinecap="round" />
          <path d="M7 9l5-6 5 6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 15v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}

function TapVisual() {
  return (
    <div className="relative flex items-center gap-4" aria-hidden="true">
      <div className="relative flex h-20 w-11 items-center justify-center rounded-[10px] border-2 border-ink/70">
        <span className="absolute h-2 w-2 rounded-full bg-ink motion-safe:animate-ping" />
        <span className="h-2 w-2 rounded-full bg-ink" />
      </div>
      <div className="h-12 w-9 rounded-[6px] bg-ink" />
      <svg width="28" height="12" viewBox="0 0 28 12" fill="none" className="text-ink/40">
        <path d="M0 6h22M18 2l6 4-6 4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="flex h-12 w-16 flex-col gap-1 rounded-[6px] border border-ink/20 bg-white p-1.5">
        <div className="h-1.5 w-2/3 rounded-full bg-ink/70" />
        <div className="h-1 w-full rounded-full bg-ink/15" />
        <div className="h-1 w-4/5 rounded-full bg-ink/15" />
      </div>
    </div>
  )
}

const steps = [
  {
    number: '01',
    title: 'Choose',
    description: 'Choose your TapOnThat product or design.',
    Visual: ChooseVisual,
  },
  {
    number: '02',
    title: 'Set Up',
    description: 'TapOnThat programs the card to your selected destination.',
    Visual: SetupVisual,
  },
  {
    number: '03',
    title: 'Tap & Connect',
    description: 'Tap the card with a compatible smartphone and the page opens.',
    Visual: TapVisual,
  },
]

export function HowItWorksSection() {
  return (
    <SectionContainer className="py-16 sm:py-20 lg:py-24">
      <Reveal>
        <SectionHeading eyebrow="How It Works" title="One tap. Three simple steps." />
      </Reveal>
      <div className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
        {steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.08}>
            <StepCard number={step.number} title={step.title} description={step.description}>
              <step.Visual />
            </StepCard>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  )
}
