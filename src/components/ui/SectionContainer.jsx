export function SectionContainer({ as: Tag = 'section', className = '', children, ...props }) {
  return (
    <Tag className={`w-full ${className}`} {...props}>
      <div className="mx-auto w-full max-w-content px-6 sm:px-8 lg:px-10">{children}</div>
    </Tag>
  )
}

export function SectionHeading({ eyebrow, title, description, align = 'left', dark = false }) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'
  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.14em] ${
            dark ? 'text-white/60' : 'text-muted'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`text-h2 font-semibold ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {description && (
        <p className={`max-w-[52ch] text-base sm:text-lg ${dark ? 'text-white/70' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
