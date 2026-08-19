import { CTAButton } from '../ui/CTAButton'
import { SectionContainer } from '../ui/SectionContainer'
import { Product3DCard } from './Product3DCard'
import { Reveal } from '../ui/Reveal'
import { IconCheck } from '../ui/icons'

const points = ['No app required', 'Works with compatible smartphones', 'Reusable']

export function Hero() {
  return (
    <SectionContainer as="section" className="pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-6 text-left order-2 lg:order-1">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              NFC Made Simple
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-hero font-extrabold text-ink">Tap. Connect. Done.</h1>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-3">
            <p className="max-w-[42ch] text-lg font-medium text-ink/80 sm:text-xl">
              Turn one simple tap into an instant booking.
            </p>
            <p className="max-w-[46ch] text-base text-muted sm:text-lg">
              NFC cards that open your booking page instantly with a compatible smartphone.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-wrap items-center gap-3 pt-2">
            <CTAButton to="/shop">Shop Book Now</CTAButton>
            <CTAButton to="/custom-orders" variant="secondary">
              Custom Orders
            </CTAButton>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col gap-2.5 pt-4">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm text-muted">
                <IconCheck className="shrink-0 text-ink/70" />
                {point}
              </div>
            ))}
          </Reveal>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal delay={0.1} className="[perspective:1200px]">
            <Product3DCard size="lg" spin />
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  )
}
