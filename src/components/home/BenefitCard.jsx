export function BenefitCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col gap-3 rounded-card border border-line bg-white p-6 transition-shadow duration-300 hover:shadow-soft">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-ink">
        <Icon />
      </div>
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      <p className="text-sm text-muted">{description}</p>
    </div>
  )
}
