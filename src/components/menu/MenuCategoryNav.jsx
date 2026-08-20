export function MenuCategoryNav({ categories, activeId, onSelect }) {
  return (
    <nav
      className="sticky top-0 z-20 border-b border-line bg-white/95"
      aria-label="Menu categories"
    >
      <div className="flex gap-2 overflow-x-auto px-4 py-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden">
        {categories.map((category) => {
          const isActive = category.id === activeId
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelect(category.id)}
              aria-current={isActive}
              className={`shrink-0 rounded-pill px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive ? 'bg-ink text-white' : 'bg-mist text-ink/70 hover:text-ink'
              }`}
              style={isActive ? { backgroundColor: 'var(--menu-accent, #0a0a0a)' } : undefined}
            >
              {category.name}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
