export function UseCaseCard({ title, description, icon: Icon }) {
  return (
    <div className="flex flex-col gap-4 rounded-card border border-line bg-white p-7 sm:p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white">
        <Icon />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-1.5 text-sm text-muted">{description}</p>
      </div>
    </div>
  )
}
