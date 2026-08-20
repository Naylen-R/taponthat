// Small monochrome line-icon set — kept inline (no icon library dependency) since only a
// handful are used across the site.
const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconNoApp(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...common} {...props}>
      <rect x="6" y="3" width="12" height="18" rx="2.5" />
      <line x1="6" y1="17" x2="18" y2="17" />
      <line x1="4" y1="4" x2="20" y2="20" />
    </svg>
  )
}

export function IconInstant(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...common} {...props}>
      <polygon points="13 2 4 14 11 14 10 22 20 9 13 9 13 2" />
    </svg>
  )
}

export function IconTap(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...common} {...props}>
      <path d="M8 13.5V7a2 2 0 1 1 4 0v5" />
      <path d="M12 12V5a2 2 0 1 1 4 0v7" />
      <path d="M16 12.5V8a2 2 0 1 1 4 0v6a7 7 0 0 1-7 7h-1a7 7 0 0 1-6-3.4l-2.1-3.6a1.7 1.7 0 0 1 2.6-2.1L8 13.5" />
    </svg>
  )
}

export function IconReusable(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...common} {...props}>
      <path d="M20 11a8 8 0 0 0-14.3-4.9M4 13a8 8 0 0 0 14.3 4.9" />
      <polyline points="4 4 4 9 9 9" />
      <polyline points="20 20 20 15 15 15" />
    </svg>
  )
}

export function IconCart(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} {...props}>
      <circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <path d="M2.5 3h2l2.4 12.1a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 8H6" />
    </svg>
  )
}

export function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...common} {...props}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  )
}

export function IconClose(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...common} {...props}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  )
}

export function IconChevron(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...common} {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export function IconCheck(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...common} {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export function IconMapleLeaf(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...common} {...props}>
      <path d="M12 2l1.5 3.6L17 4l-1 3.8L20 9l-3 2.4L19 15l-3.8-.6L15.5 18 12 15.8 8.5 18l.3-3.6L5 15l2-3.6L4 9l3.5-1.2L6.5 4l3.5 1.6L12 2z" />
      <line x1="12" y1="15.8" x2="12" y2="21" />
    </svg>
  )
}

export function IconShield(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...common} {...props}>
      <path d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

export function IconTruck(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...common} {...props}>
      <rect x="1.5" y="7" width="12" height="9" rx="1" />
      <path d="M13.5 10h3.5l3 3v3h-6.5z" />
      <circle cx="6" cy="18.5" r="1.6" />
      <circle cx="16.5" cy="18.5" r="1.6" />
    </svg>
  )
}
