import { SectionContainer } from '../components/ui/SectionContainer'
import { CTAButton } from '../components/ui/CTAButton'
import { usePageMeta } from '../hooks/usePageMeta'

export default function CheckoutSuccess() {
  usePageMeta({ title: 'Order Confirmed — TapOnThat' })

  return (
    <SectionContainer className="flex flex-1 flex-col items-center justify-center py-24 text-center">
      <h1 className="text-h2 font-semibold text-ink">You're all set.</h1>
      <p className="mt-3 max-w-[42ch] text-muted">
        Thanks for your order — a confirmation will be sent to your email shortly.
      </p>
      <CTAButton to="/" className="mt-8">
        Back to Home
      </CTAButton>
    </SectionContainer>
  )
}
