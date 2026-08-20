import { SectionContainer } from '../components/ui/SectionContainer'
import { CTAButton } from '../components/ui/CTAButton'
import { Product3DCard } from '../components/home/Product3DCard'
import { Reveal } from '../components/ui/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'

export default function About() {
  usePageMeta({
    title: 'About — TapOnThat',
    description: 'TapOnThat is a Canadian NFC solutions company focused on making digital interactions simple for businesses and customers.',
  })

  return (
    <SectionContainer className="py-14 sm:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col items-start gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">About</span>
          <h1 className="text-h2 font-semibold text-ink">Simple, physical, instant.</h1>
          <p className="max-w-[46ch] text-lg text-muted">
            TapOnThat is a Canadian NFC solutions company focused on making digital interactions
            simple and convenient for businesses and customers.
          </p>
          <p className="max-w-[46ch] text-muted">
            We build NFC tap cards that turn a single tap into an instant connection — a booking
            page, a website, a profile — without an app, a QR code, or a search. One card, one
            tap, done.
          </p>
          <CTAButton to="/shop" className="mt-2">
            Shop Book Now
          </CTAButton>
        </Reveal>
        <Reveal delay={0.1} className="rounded-card border border-line bg-mist p-10 sm:p-14">
          <Product3DCard size="lg" />
        </Reveal>
      </div>
    </SectionContainer>
  )
}
