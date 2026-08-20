import { useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRestaurantBySlug } from '../data/restaurants'
import { MenuHeader } from '../components/menu/MenuHeader'
import { MenuCategoryNav } from '../components/menu/MenuCategoryNav'
import { MenuCategory } from '../components/menu/MenuCategory'
import { MenuFooter } from '../components/menu/MenuFooter'
import { usePageMeta } from '../hooks/usePageMeta'
import MenuNotFound from './MenuNotFound'

export default function RestaurantMenuPage() {
  const { restaurantSlug } = useParams()
  const restaurant = useMemo(() => getRestaurantBySlug(restaurantSlug), [restaurantSlug])

  usePageMeta({
    title: restaurant ? `${restaurant.name} — Menu` : 'Menu Not Found — TapOnThat',
    description: restaurant?.tagline ?? restaurant?.description,
  })

  if (!restaurant) return <MenuNotFound />

  return <RestaurantMenu restaurant={restaurant} />
}

function RestaurantMenu({ restaurant }) {
  const { categories } = restaurant
  const [activeId, setActiveId] = useState(categories[0]?.id)
  const sectionRefs = useRef(new Map())

  useEffect(() => {
    const sections = Array.from(sectionRefs.current.values()).filter(Boolean)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) {
          const id = visible[0].target.id.replace('category-', '')
          setActiveId(id)
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [categories])

  function handleSelectCategory(id) {
    const section = sectionRefs.current.get(id)
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div
      className="flex min-h-svh flex-col bg-white text-ink motion-safe:animate-[menuFadeIn_0.4s_ease-out]"
      style={{ '--menu-accent': restaurant.theme?.accent || '#0a0a0a' }}
    >
      <MenuHeader restaurant={restaurant} />
      <MenuCategoryNav categories={categories} activeId={activeId} onSelect={handleSelectCategory} />

      <main className="mx-auto w-full max-w-2xl flex-1 divide-y divide-line px-4 sm:px-6">
        {categories.map((category) => (
          <MenuCategory
            key={category.id}
            category={category}
            currency={restaurant.currency}
            sectionRef={(el) => {
              if (el) sectionRefs.current.set(category.id, el)
              else sectionRefs.current.delete(category.id)
            }}
          />
        ))}
      </main>

      <div className="mx-auto w-full max-w-2xl">
        <MenuFooter restaurant={restaurant} />
      </div>
    </div>
  )
}
