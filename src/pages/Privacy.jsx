import { LegalPageLayout } from '../components/ui/LegalPageLayout'
import { siteConfig } from '../data/siteConfig'
import { usePageMeta } from '../hooks/usePageMeta'

// Placeholder privacy policy — have this reviewed before launch and replace with a finalized version.
export default function Privacy() {
  usePageMeta({ title: 'Privacy Policy — TapOnThat', description: 'How TapOnThat collects, uses, and protects your information.' })

  return (
    <LegalPageLayout title="Privacy Policy">
      <p>
        TapOnThat collects the information needed to process orders, program cards, and respond
        to custom order requests — such as your name, contact details, delivery address, and any
        artwork you provide.
      </p>
      <p>
        We use this information only to fulfill your order and communicate with you about it. We
        do not sell your personal information.
      </p>
      <p>
        Payment is processed securely by our payment provider; TapOnThat does not store your full
        card details.
      </p>
      <p>
        Questions about your data? Email{' '}
        <a href={`mailto:${siteConfig.email}`} className="font-medium text-ink underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </LegalPageLayout>
  )
}
