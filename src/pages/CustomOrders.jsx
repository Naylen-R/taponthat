import { SectionContainer } from '../components/ui/SectionContainer'
import { CustomOrderForm } from '../components/forms/CustomOrderForm'
import { Reveal } from '../components/ui/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'

function MockupCard({ className = '', label }) {
  return (
    <div
      className={`flex aspect-[86.4/54] w-36 flex-col justify-between rounded-[14px] bg-ink p-4 shadow-card sm:w-44 ${className}`}
    >
      <div className="h-6 w-6 rounded-full border border-white/40" />
      <p className="text-xs font-medium text-white/70">{label}</p>
    </div>
  )
}

const processSteps = [
  { number: '01', title: 'Submit Your Idea', description: 'Tell us what you need through the form below.' },
  { number: '02', title: 'TapOnThat Reviews It', description: 'We review your request and requirements.' },
  { number: '03', title: 'Approve Design / Quote', description: 'You review and approve the design and quote.' },
  { number: '04', title: 'Production', description: 'Your cards go into production.' },
  { number: '05', title: 'Canadian Delivery or Eligible Local Pickup', description: 'Delivered across Canada, or picked up locally where available.' },
]

export default function CustomOrders() {
  usePageMeta({
    title: 'Custom Orders — TapOnThat',
    description: 'Put your logo, design and destination on custom NFC cards built for your business. Request a quote from TapOnThat.',
  })

  return (
    <>
      <SectionContainer className="pt-14 pb-10 sm:pt-20 sm:pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col items-start gap-5">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Custom Business Orders
            </span>
            <h1 className="text-h2 font-semibold text-ink">Create Your TapOnThat</h1>
            <p className="max-w-[42ch] text-lg text-muted">
              Your logo.
              <br />
              Your design.
              <br />
              Your destination.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative flex items-center justify-center gap-6 py-6">
            <MockupCard label="Your Logo" className="rotate-[-6deg]" />
            <MockupCard label="Your Design" className="translate-y-6 rotate-[4deg]" />
          </Reveal>
        </div>
      </SectionContainer>

      <SectionContainer className="pb-20 sm:pb-24">
        <Reveal className="mx-auto max-w-2xl rounded-card border border-line bg-white p-8 sm:p-12">
          <CustomOrderForm />
        </Reveal>
      </SectionContainer>

      <SectionContainer className="bg-mist py-16 sm:py-20 lg:py-24">
        <Reveal>
          <h2 className="text-h2 font-semibold text-ink">How Custom Orders Work</h2>
        </Reveal>
        <div className="mt-12 flex flex-col gap-8 sm:grid sm:grid-cols-5 sm:gap-6">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.05} className="flex flex-col gap-2 sm:border-t-2 sm:border-ink sm:pt-5">
              <span className="text-sm font-semibold text-muted">{step.number}</span>
              <h3 className="text-base font-semibold text-ink">{step.title}</h3>
              <p className="text-sm text-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </>
  )
}
