import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../ui/Logo'
import { IconCart, IconMenu } from '../ui/icons'
import { useCart } from '../../context/CartContext'
import { useScrolled } from '../../hooks/useScrolled'
import { siteConfig } from '../../data/siteConfig'
import { MobileNav } from './MobileNav'

export function Header() {
  const scrolled = useScrolled()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, openCart } = useCart()

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-white/95 transition-shadow duration-300 ${
          scrolled ? 'shadow-soft border-b border-transparent' : 'border-b border-line'
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between px-6 sm:px-8 lg:px-10">
          <Logo />

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {siteConfig.nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-ink ${
                    isActive ? 'text-ink' : 'text-muted'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openCart}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-mist transition-colors"
              aria-label={`Open cart${itemCount ? `, ${itemCount} items` : ''}`}
            >
              <IconCart />
              {itemCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-[18px] items-center justify-center rounded-pill bg-ink px-1 text-[10px] font-semibold text-white">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-mist transition-colors md:hidden"
              aria-label="Open menu"
            >
              <IconMenu />
            </button>
          </div>
        </div>
      </header>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
