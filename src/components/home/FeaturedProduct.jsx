import { SectionContainer } from '../ui/SectionContainer'
import { CTAButton } from '../ui/CTAButton'
import { Product3DCard } from './Product3DCard'
import { Reveal } from '../ui/Reveal'
import { IconCheck } from '../ui/icons'
import { products } from '../../data/products'
import { formatPrice } from '../../lib/format'

export function FeaturedProduct() {
  const product = products[0]

  return (
    <SectionContainer className="py-16 sm:py-20 lg:py-24">
      <div className="grid items-center gap-12 rounded-card border border-line bg-mist p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
        <Reveal>
          <Product3DCard size="lg" />
        </Reveal>
        <Reveal delay={0.08} className="flex flex-col items-start gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Book Now NFC Card
          </span>
          <h2 className="text-h2 font-semibold text-ink">Make booking easier.</h2>
          <p className="max-w-[42ch] text-base text-muted sm:text-lg">
            Customers tap your card and your booking page opens — no app, no typing, no delay.
          </p>
          <p className="text-2xl font-semibold text-ink">
            {formatPrice(product.price, product.currency)}
          </p>
          <ul className="flex flex-col gap-2">
            {product.benefits.slice(0, 3).map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-muted">
                <IconCheck className="mt-0.5 shrink-0 text-ink/70" />
                {b}
              </li>
            ))}
          </ul>
          <CTAButton to={`/products/${product.slug}`} className="mt-2">
            Shop Now
          </CTAButton>
        </Reveal>
      </div>
    </SectionContainer>
  )
}
