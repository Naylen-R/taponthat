import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { SectionContainer } from '../components/ui/SectionContainer'
import { CTAButton } from '../components/ui/CTAButton'
import { ProductGallery } from '../components/product/ProductGallery'
import { QuantitySelector } from '../components/product/QuantitySelector'
import { Accordion } from '../components/ui/Accordion'
import { IconCheck } from '../components/ui/icons'
import { getProductBySlug } from '../data/products'
import { formatPrice } from '../lib/format'
import { useCart } from '../context/CartContext'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Product() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)

  usePageMeta({
    title: product ? `${product.name} — TapOnThat` : 'Product not found — TapOnThat',
    description: product?.shortDescription,
  })

  if (!product) return <Navigate to="/shop" replace />

  const infoSections = [
    {
      id: 'how',
      title: 'How It Works',
      content: 'Tap the card against a compatible smartphone. Your booking page opens instantly — no app required for the person tapping.',
    },
    {
      id: 'what',
      title: 'What It Does',
      content: 'The card is programmed with your booking link. Every tap opens that destination directly in the browser.',
    },
    {
      id: 'compat',
      title: 'Compatibility',
      content: 'Works with most modern NFC-enabled smartphones. No app installation is required to tap and open the destination.',
    },
    {
      id: 'included',
      title: "What's Included",
      content: 'One TapOnThat Book Now NFC Card, programmed and ready to tap.',
    },
    {
      id: 'shipping',
      title: 'Shipping / Fulfillment',
      content: 'Ships across Canada. Delivery timelines are confirmed at checkout.',
    },
    {
      id: 'faq',
      title: 'FAQ',
      content: (
        <div className="flex flex-col gap-4">
          {product.faqs.map((f) => (
            <div key={f.q}>
              <p className="font-medium text-ink">{f.q}</p>
              <p className="mt-1">{f.a}</p>
            </div>
          ))}
        </div>
      ),
    },
  ]

  return (
    <SectionContainer className="py-12 sm:py-16 lg:py-20">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
        <Link to="/shop" className="hover:text-ink">
          Shop
        </Link>{' '}
        / <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <ProductGallery images={product.images ?? []} productName={product.name} />

        <div className="flex flex-col items-start gap-5">
          <div>
            <h1 className="text-h2 font-semibold text-ink">{product.name}</h1>
            <p className="mt-2 text-lg text-muted">{product.tagline}</p>
          </div>

          <p className="text-2xl font-semibold text-ink">
            {formatPrice(product.price, product.currency)}
          </p>

          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-ink">Quantity</span>
            <QuantitySelector quantity={quantity} onChange={setQuantity} />
          </div>

          <div className="flex w-full flex-col gap-3 pt-2 sm:flex-row">
            <CTAButton
              type="button"
              onClick={() => addItem(product.id, quantity)}
              className="w-full sm:w-auto"
            >
              Add to Cart
            </CTAButton>
            <CTAButton to="/custom-orders" variant="secondary" className="w-full sm:w-auto">
              Need a Custom Design?
            </CTAButton>
          </div>

          <ul className="mt-4 flex flex-col gap-2.5 border-t border-line pt-6">
            {product.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-muted">
                <IconCheck className="mt-0.5 shrink-0 text-ink/70" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20">
        <Accordion items={infoSections} />
      </div>
    </SectionContainer>
  )
}
