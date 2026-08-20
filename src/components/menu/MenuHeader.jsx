export function MenuHeader({ restaurant }) {
  const { name, logo, tagline, description } = restaurant

  return (
    <header className="px-4 pt-8 pb-6 text-center sm:px-6 sm:pt-12">
      {logo && (
        <img
          src={logo}
          alt={`${name} logo`}
          className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
        />
      )}
      <h1 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{name}</h1>
      {tagline && <p className="mx-auto mt-2 max-w-[46ch] text-sm text-muted sm:text-base">{tagline}</p>}
      {description && !tagline && (
        <p className="mx-auto mt-2 max-w-[46ch] text-sm text-muted sm:text-base">{description}</p>
      )}
    </header>
  )
}
