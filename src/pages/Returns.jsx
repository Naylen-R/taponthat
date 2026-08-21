import { Link } from 'react-router-dom'
import { LegalPageLayout } from '../components/ui/LegalPageLayout'
import { usePageMeta } from '../hooks/usePageMeta'

// Placeholder policy copy — confirm exact return window/conditions before launch, then update here.
export default function Returns() {
  usePageMeta({ title: 'Returns & Refunds — TapOnThat', description: 'Returns and refunds policy for TapOnThat orders.' })

  return (
    <LegalPageLayout title="Returns & Refunds">
      <p>
        If something's wrong with your card — damaged, defective, or not what you ordered —
        reach out and we'll make it right.
      </p>
      <p>
        Custom orders are produced to your specifications, so returns on custom cards are
        handled case by case once production has started.
      </p>
      <p>
        To start a return, <Link to="/contact" className="font-medium text-ink underline">contact us</Link> with your order details.
      </p>
    </LegalPageLayout>
  )
}
