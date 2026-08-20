import { SectionContainer } from '../ui/SectionContainer'
import { CTAButton } from '../ui/CTAButton'
import { Reveal } from '../ui/Reveal'

export function FinalCTA() {
  return (
    <SectionContainer className="py-20 text-center sm:py-28">
      <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-6">
        <h2 className="text-h2 font-semibold text-ink">Ready to make booking easier?</h2>
        <p className="text-lg text-muted">
          One card.
          <br />
          One tap.
          <br />
          You're there.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <CTAButton to="/shop">Shop Book Now</CTAButton>
          <CTAButton to="/custom-orders" variant="secondary">
            Create a Custom Card
          </CTAButton>
        </div>
      </Reveal>
    </SectionContainer>
  )
}
