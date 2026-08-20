import { MenuItem } from './MenuItem'

export function MenuCategory({ category, currency, sectionRef }) {
  return (
    <section
      id={`category-${category.id}`}
      ref={sectionRef}
      className="scroll-mt-28 py-6"
      aria-labelledby={`category-${category.id}-heading`}
    >
      <h2
        id={`category-${category.id}-heading`}
        className="text-xs font-semibold uppercase tracking-[0.16em] text-muted"
      >
        {category.name}
      </h2>
      <ul className="mt-2 divide-y divide-line">
        {category.items.map((item) => (
          <MenuItem key={item.id ?? item.name} item={item} currency={currency} />
        ))}
      </ul>
    </section>
  )
}
