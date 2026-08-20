import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function MenuNotFound() {
  usePageMeta({ title: 'Menu Not Found — TapOnThat' })

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-3 px-6 text-center">
      <h1 className="text-xl font-semibold text-ink">Menu not found.</h1>
      <p className="max-w-[38ch] text-sm text-muted">
        We couldn't find a menu at this link. Please check with the restaurant, or the QR/NFC tag
        may need to be reprogrammed.
      </p>
      <Link to="/" className="mt-4 text-sm font-semibold text-ink underline-offset-4 hover:underline">
        Go to TapOnThat
      </Link>
    </div>
  )
}
