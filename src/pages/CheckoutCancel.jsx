import { SectionContainer } from '../components/ui/SectionContainer'
import { CTAButton } from '../components/ui/CTAButton'
import { usePageMeta } from '../hooks/usePageMeta'

export default function CheckoutCancel() {
  usePageMeta({ title: 'Checkout Cancelled — TapOnThat' })

  return (
    <SectionContainer className="flex flex-1 flex-col items-center justify-center py-24 text-center">
      <h1 className="text-h2 font-semibold text-ink">Checkout cancelled.</h1>
      <p className="mt-3 max-w-[42ch] text-muted">
        No charge was made. Your cart is still saved whenever you're ready.
      </p>
      <CTAButton to="/shop" className="mt-8">
        Back to Shop
      </CTAButton>
    </SectionContainer>
  )
}
