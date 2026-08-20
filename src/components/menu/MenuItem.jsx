import { formatPrice } from '../../lib/format'

const TAG_LABELS = {
  vegetarian: 'Vegetarian',
  vegan: 'Vegan',
  'gluten-free': 'Gluten-Free',
  spicy: 'Spicy',
  nuts: 'Contains Nuts',
  halal: 'Halal',
}

export function MenuItem({ item, currency = 'CAD' }) {
  const { name, description, price, image, tags = [], available = true } = item

  return (
    <li className={`flex gap-4 py-4 ${available ? '' : 'opacity-50'}`}>
      {image && (
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-16 w-16 shrink-0 rounded-xl object-cover"
        />
      )}
      <div className="flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold leading-snug text-ink">{name}</h3>
          <span className="whitespace-nowrap text-base font-semibold text-ink">
            {formatPrice(price, currency)}
          </span>
        </div>
        {description && <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>}
        {(tags.length > 0 || !available) && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {!available && (
              <span className="rounded-pill bg-ink/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ink/70">
                Sold out
              </span>
            )}
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-pill border border-line px-2 py-0.5 text-[11px] font-medium text-muted"
              >
                {TAG_LABELS[tag] ?? tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  )
}
