// PLACEHOLDER PRICING — no store/payment backend is connected yet.
// Replace `price` with the real CAD price before launch. Nothing here is fabricated
// as "real" data; it exists so the UI/cart/checkout flow can be built and wired up later.
export const products = [
  {
    id: 'book-now-nfc-card',
    slug: 'book-now-nfc-card',
    name: 'Book Now NFC Card',
    tagline: 'Make booking easier.',
    shortDescription: 'Tap the card, your booking page opens. No app required.',
    price: 39.99, // PLACEHOLDER
    currency: 'CAD',
    color: 'Black',
    image: null, // real product photography goes here — see Product3DCard fallback
    benefits: [
      'NFC enabled — works with compatible smartphones',
      'No app required for the person tapping',
      'Reusable — reprogram the destination anytime',
      'Ships within Canada',
    ],
    faqs: [
      {
        q: 'Do I need an app to use it?',
        a: 'No. The person tapping just needs a compatible smartphone — nothing to install.',
      },
      {
        q: 'What does the card open?',
        a: 'Your Book Now card is set up to open your booking page. Custom destinations are available through Custom Orders.',
      },
      {
        q: 'Can I change where it points later?',
        a: 'Yes — the card is reprogrammable, so your destination can be updated as your business changes.',
      },
      {
        q: 'Where do you ship?',
        a: 'We currently ship across Canada only.',
      },
    ],
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}
