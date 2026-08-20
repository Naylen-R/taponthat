import { SectionContainer } from '../ui/SectionContainer'
import { CTAButton } from '../ui/CTAButton'
import { Reveal } from '../ui/Reveal'

function MockupCard({ className = '', label }) {
  return (
    <div
      className={`flex aspect-[86.4/54] w-40 flex-col justify-between rounded-[14px] border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm sm:w-48 ${className}`}
    >
      <div className="h-6 w-6 rounded-full border border-white/30" />
      <p className="text-xs font-medium text-white/70">{label}</p>
    </div>
  )
}

export function CustomOrdersBanner() {
  return (
    <SectionContainer as="section" className="bg-ink py-16 sm:py-20 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col items-start gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
            Custom Business Orders
          </span>
          <h2 className="text-h2 font-semibold text-white">Your brand. One tap away.</h2>
          <p className="max-w-[42ch] text-base text-white/70 sm:text-lg">
            Put your logo, design and destination on custom NFC cards built for your business.
          </p>
          <CTAButton to="/custom-orders" variant="inverted" className="mt-2">
            Start a Custom Order
          </CTAButton>
        </Reveal>

        <Reveal delay={0.1} className="relative flex items-center justify-center gap-6 py-4">
          <MockupCard label="Your Logo" className="rotate-[-6deg]" />
          <MockupCard label="Your Design" className="translate-y-6 rotate-[4deg]" />
        </Reveal>
      </div>
    </SectionContainer>
  )
}
