import { LegalPageLayout } from '../components/ui/LegalPageLayout'
import { usePageMeta } from '../hooks/usePageMeta'

// Placeholder policy copy — confirm exact carriers/timelines before launch, then update here.
export default function Shipping() {
  usePageMeta({ title: 'Shipping & Delivery — TapOnThat', description: 'Shipping and delivery information for TapOnThat orders across Canada.' })

  return (
    <LegalPageLayout title="Shipping & Delivery">
      <p>TapOnThat currently ships within Canada only.</p>
      <p>
        Orders are prepared and shipped after your card is programmed to your chosen
        destination. You'll receive tracking information by email once your order ships.
      </p>
      <p>
        For custom orders, delivery timing depends on production and is confirmed as part of
        your quote — see <a href="/custom-orders" className="font-medium text-ink underline">Custom Orders</a>.
      </p>
      <p>
        Questions about an order? <a href="/contact" className="font-medium text-ink underline">Contact us</a>.
      </p>
    </LegalPageLayout>
  )
}
