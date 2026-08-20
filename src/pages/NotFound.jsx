import { SectionContainer } from '../components/ui/SectionContainer'
import { CTAButton } from '../components/ui/CTAButton'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta({ title: 'Page Not Found — TapOnThat' })

  return (
    <SectionContainer className="flex flex-1 flex-col items-center justify-center py-24 text-center">
      <h1 className="text-h2 font-semibold text-ink">Page not found.</h1>
      <p className="mt-3 max-w-[42ch] text-muted">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <CTAButton to="/" className="mt-8">
        Back to Home
      </CTAButton>
    </SectionContainer>
  )
}
