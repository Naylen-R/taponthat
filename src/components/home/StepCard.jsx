export function StepCard({ number, title, description, children }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex h-44 items-center justify-center rounded-card border border-line bg-mist sm:h-52">
        {children}
      </div>
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          Step {number}
        </span>
        <h3 className="mt-1 text-xl font-semibold text-ink">{title}</h3>
        <p className="mt-1.5 text-sm text-muted">{description}</p>
      </div>
    </div>
  )
}
