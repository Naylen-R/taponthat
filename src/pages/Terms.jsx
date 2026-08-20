import { LegalPageLayout } from '../components/ui/LegalPageLayout'
import { siteConfig } from '../data/siteConfig'
import { usePageMeta } from '../hooks/usePageMeta'

// Placeholder terms of service — have this reviewed before launch and replace with a finalized version.
export default function Terms() {
  usePageMeta({ title: 'Terms of Service — TapOnThat', description: 'Terms of service for purchasing and using TapOnThat products.' })

  return (
    <LegalPageLayout title="Terms of Service">
      <p>
        By ordering from TapOnThat, you agree to provide accurate information for your order and
        any custom design request.
      </p>
      <p>
        Prices are listed in CAD. TapOnThat currently serves customers within Canada only.
      </p>
      <p>
        Custom orders are produced based on the artwork and instructions you provide — please
        confirm you have the rights to use any logo or design you submit.
      </p>
      <p>
        Questions about these terms? Email{' '}
        <a href={`mailto:${siteConfig.email}`} className="font-medium text-ink underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </LegalPageLayout>
  )
}
