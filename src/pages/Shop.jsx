import { SectionContainer } from '../components/ui/SectionContainer'
import { CTAButton } from '../components/ui/CTAButton'
import { ProductCard } from '../components/product/ProductCard'
import { Reveal } from '../components/ui/Reveal'
import { products } from '../data/products'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Shop() {
  usePageMeta({
    title: 'Shop TapOnThat — NFC Tap Cards',
    description: 'Shop the TapOnThat Book Now NFC Card. Simple tools. One tap away. CAD pricing, shipping across Canada.',
  })

  return (
    <>
      <SectionContainer className="pt-14 pb-10 text-center sm:pt-20">
        <Reveal>
          <h1 className="text-h2 font-semibold text-ink">Shop TapOnThat</h1>
          <p className="mx-auto mt-3 max-w-[46ch] text-lg text-muted">
            Simple tools. One tap away.
          </p>
        </Reveal>
      </SectionContainer>

      <SectionContainer className="pb-16 sm:pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Reveal key={product.id}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pb-20 sm:pb-28">
        <Reveal className="flex flex-col items-center gap-4 rounded-card border border-line bg-mist p-10 text-center sm:p-14">
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">
            Looking for your own design?
          </h2>
          <p className="max-w-[42ch] text-muted">
            Put your logo, design and destination on a custom NFC card built for your business.
          </p>
          <CTAButton to="/custom-orders">Start a Custom Order</CTAButton>
        </Reveal>
      </SectionContainer>
    </>
  )
}
