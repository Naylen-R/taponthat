function IconPin(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  )
}
function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4.5 4h3.2l1.4 4.4-2 1.6a13 13 0 0 0 6.9 6.9l1.6-2 4.4 1.4v3.2a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 2.5 6.2 2 2 0 0 1 4.5 4z" />
    </svg>
  )
}
function IconClock(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}
function IconNfc(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...props}>
      <path d="M4 9a8 8 0 0 1 8-8" />
      <path d="M4 14a13 13 0 0 1 13-13" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function MenuFooter({ restaurant }) {
  const { address, phone, hours, social } = restaurant
  const hasSocial = social && Object.values(social).some(Boolean)

  return (
    <footer className="mt-4 border-t border-line px-4 py-8 sm:px-6">
      <div className="flex flex-col gap-3 text-sm text-muted">
        {address && (
          <div className="flex items-start gap-2">
            <IconPin className="mt-0.5 shrink-0 text-ink/50" />
            <span>{address}</span>
          </div>
        )}
        {phone && (
          <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="flex items-center gap-2 hover:text-ink">
            <IconPhone className="shrink-0 text-ink/50" />
            <span>{phone}</span>
          </a>
        )}
        {hours?.length > 0 && (
          <div className="flex items-start gap-2">
            <IconClock className="mt-0.5 shrink-0 text-ink/50" />
            <div className="flex flex-col gap-0.5">
              {hours.map((h) => (
                <span key={h.days}>
                  {h.days}: {h.time}
                </span>
              ))}
            </div>
          </div>
        )}
        {hasSocial && (
          <div className="flex flex-wrap gap-3 pt-1">
            {social.instagram && (
              <a href={social.instagram} target="_blank" rel="noreferrer" className="hover:text-ink">
                Instagram
              </a>
            )}
            {social.website && (
              <a href={social.website} target="_blank" rel="noreferrer" className="hover:text-ink">
                Website
              </a>
            )}
          </div>
        )}
      </div>

      <div className="mt-8 flex items-center justify-center gap-1.5 text-xs text-muted/70">
        <IconNfc aria-hidden="true" />
        <span>Powered by TapOnThat</span>
      </div>
    </footer>
  )
}
