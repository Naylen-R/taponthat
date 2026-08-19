import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { IconClose } from '../ui/icons'
import { Logo } from '../ui/Logo'
import { siteConfig } from '../../data/siteConfig'
import { CTAButton } from '../ui/CTAButton'

export function MobileNav({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${open ? '' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-card transition-transform duration-300 ease-premium ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-line px-6">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-mist"
            aria-label="Close menu"
          >
            <IconClose />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-4 py-6" aria-label="Mobile">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-xl px-3 py-3.5 text-lg font-medium ${
                  isActive ? 'bg-mist text-ink' : 'text-ink/85 hover:bg-mist'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-3 border-t border-line p-6">
          <CTAButton to="/shop" onClick={onClose} className="w-full">
            Shop Book Now
          </CTAButton>
          <CTAButton to="/custom-orders" variant="secondary" onClick={onClose} className="w-full">
            Custom Orders
          </CTAButton>
        </div>
      </div>
    </div>
  )
}
