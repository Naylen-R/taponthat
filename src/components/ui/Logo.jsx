import { Link } from 'react-router-dom'

// PLACEHOLDER wordmark — swap for the real TapOnThat logo file (e.g. <img src="/logo.svg" .../>)
// once it's added to src/assets. Keep the same link/aria-label wrapper.
export function Logo({ dark = false, className = '' }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-1.5 text-xl font-extrabold tracking-tight ${
        dark ? 'text-white' : 'text-ink'
      } ${className}`}
      aria-label="TapOnThat home"
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-[6px] text-xs ${
          dark ? 'bg-white text-ink' : 'bg-ink text-white'
        }`}
        aria-hidden="true"
      >
        T
      </span>
      TapOnThat
    </Link>
  )
}
