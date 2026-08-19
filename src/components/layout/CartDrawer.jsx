import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { CTAButton } from '../ui/CTAButton'
import { IconClose } from '../ui/icons'
import { startCheckout } from '../../lib/stripe'
import { formatPrice } from '../../lib/format'

export function CartDrawer() {
  const { isOpen, closeCart, lineItems, subtotal, updateQuantity, removeItem } = useCart()
  const [checkoutError, setCheckoutError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => e.key === 'Escape' && closeCart()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, closeCart])

  async function handleCheckout() {
    setCheckoutError('')
    setLoading(true)
    try {
      await startCheckout(lineItems)
    } catch (err) {
      setCheckoutError(
        'Checkout isn’t connected yet — payment setup is still in progress. Your cart is saved.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeCart}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-[92%] max-w-md flex-col bg-white shadow-card transition-transform duration-300 ease-premium ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-6">
          <h2 className="text-base font-semibold">Your Cart</h2>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-mist"
            aria-label="Close cart"
          >
            <IconClose />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {lineItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <p className="text-muted">Your cart is empty.</p>
              <CTAButton to="/shop" onClick={closeCart}>
                Shop Book Now
              </CTAButton>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {lineItems.map((li) => (
                <li key={li.productId} className="flex gap-4">
                  <div className="h-20 w-20 shrink-0 rounded-xl bg-ink" aria-hidden="true" />
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-medium leading-tight">{li.product.name}</p>
                      <p className="whitespace-nowrap font-medium">
                        {formatPrice(li.product.price * li.quantity, li.product.currency)}
                      </p>
                    </div>
                    <p className="text-sm text-muted">{li.product.color}</p>
                    <div className="mt-1 flex items-center gap-3">
                      <div className="flex items-center rounded-pill border border-line">
                        <button
                          type="button"
                          className="h-8 w-8 text-lg"
                          onClick={() => updateQuantity(li.productId, li.quantity - 1)}
                          aria-label={`Decrease quantity of ${li.product.name}`}
                        >
                          –
                        </button>
                        <span className="w-6 text-center text-sm" aria-live="polite">
                          {li.quantity}
                        </span>
                        <button
                          type="button"
                          className="h-8 w-8 text-lg"
                          onClick={() => updateQuantity(li.productId, li.quantity + 1)}
                          aria-label={`Increase quantity of ${li.product.name}`}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(li.productId)}
                        className="text-sm text-muted underline-offset-2 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lineItems.length > 0 && (
          <div className="shrink-0 border-t border-line p-6">
            <div className="mb-4 flex items-center justify-between text-base font-semibold">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal, 'CAD')}</span>
            </div>
            {checkoutError && (
              <p role="alert" className="mb-3 text-sm text-muted">
                {checkoutError}
              </p>
            )}
            <CTAButton
              type="button"
              onClick={handleCheckout}
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Redirecting…' : 'Checkout'}
            </CTAButton>
            <p className="mt-3 text-center text-xs text-muted">
              Secure checkout · CAD · Ships across Canada
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
