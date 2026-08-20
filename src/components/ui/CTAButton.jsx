import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 text-sm sm:text-base font-semibold transition-all duration-300 ease-premium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none'

const variants = {
  primary: 'bg-ink text-white hover:bg-ink/85 active:bg-ink/95',
  secondary: 'bg-transparent text-ink border border-ink/20 hover:border-ink/60',
  inverted: 'bg-white text-ink hover:bg-white/90',
  ghost: 'bg-transparent text-white border border-white/30 hover:border-white/70',
}

export function CTAButton({ to, href, variant = 'primary', className = '', children, ...props }) {
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
