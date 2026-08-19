import { loadStripe } from '@stripe/stripe-js'

// PLACEHOLDER — set VITE_STRIPE_PUBLISHABLE_KEY in a .env file once a Stripe account exists.
// The publishable key is safe for the browser; the secret key must never live in frontend code.
const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY

let stripePromise
export function getStripe() {
  if (!publishableKey) return null
  if (!stripePromise) stripePromise = loadStripe(publishableKey)
  return stripePromise
}

// Creating a real Checkout Session requires a server (Node/serverless function) holding the
// Stripe secret key — it cannot be done from the browser alone. This calls a placeholder
// endpoint that does not exist yet; see README for what to build.
export async function startCheckout(lineItems) {
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      items: lineItems.map((li) => ({ productId: li.product.id, quantity: li.quantity })),
    }),
  })

  if (!response.ok) {
    throw new Error('checkout_backend_not_configured')
  }

  const { sessionId } = await response.json()
  const stripe = await getStripe()
  if (!stripe) throw new Error('stripe_not_configured')
  await stripe.redirectToCheckout({ sessionId })
}
