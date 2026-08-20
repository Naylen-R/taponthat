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
    image: '/images/products/booknow-nfc-card-front.webp',
    images: [
      { src: '/images/products/booknow-nfc-card-front.webp', alt: 'Book Now NFC Card — front' },
      { src: '/images/products/booknow-nfc-card-back.webp', alt: 'Book Now NFC Card — back' },
    ],
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
  {
    id: 'connect-nfc-card',
    slug: 'connect-nfc-card',
    name: 'TapOnThat Connect Card',
    tagline: 'Connect with a tap.',
    shortDescription: 'Share your website, contact info or profile — instantly, with one tap.',
    price: 34.99, // PLACEHOLDER
    currency: 'CAD',
    color: 'White',
    image: '/images/products/taponthat-connect-card-front.webp',
    images: [
      { src: '/images/products/taponthat-connect-card-front.webp', alt: 'TapOnThat Connect Card — front' },
      { src: '/images/products/taponthat-connect-card-back.webp', alt: 'TapOnThat Connect Card — back' },
    ],
    benefits: [
      'NFC enabled — works with compatible smartphones',
      'No app required for the person tapping',
      'Reusable — reprogram the destination anytime',
      'Ships within Canada',
    ],
    faqs: [
      {
        q: 'What does this card open?',
        a: 'Your Connect Card can be programmed to open your website, a contact card, a social profile, or any destination you choose.',
      },
      {
        q: 'Do I need an app to use it?',
        a: 'No. The person tapping just needs a compatible smartphone — nothing to install.',
      },
      {
        q: 'Can I change where it points later?',
        a: 'Yes — the card is reprogrammable, so your destination can be updated anytime.',
      },
      {
        q: 'Where do you ship?',
        a: 'We currently ship across Canada only.',
      },
    ],
  },
  {
    id: 'menu-stand',
    slug: 'menu-stand',
    name: 'TapOnThat Menu Stand',
    tagline: 'Tap to view the menu.',
    shortDescription: 'A freestanding NFC table card that opens your restaurant’s digital menu — no app, no QR code.',
    price: 24.99, // PLACEHOLDER
    currency: 'CAD',
    color: 'White',
    image: '/images/products/menu-stand-front.webp',
    images: [{ src: '/images/products/menu-stand-front.webp', alt: 'TapOnThat Menu Stand — printed face' }],
    benefits: [
      'NFC enabled — customers tap to open your menu instantly',
      'No app or QR code required',
      'Freestanding — sits on any table or counter',
      '350gsm rigid cardstock, matte lamination',
      'Ships within Canada',
    ],
    faqs: [
      {
        q: 'What does tapping the stand open?',
        a: 'The stand is programmed to open your restaurant’s digital menu — your existing website, or a simple mobile-friendly menu page TapOnThat can host for you.',
      },
      {
        q: 'Do I need an existing website?',
        a: 'No. If you don’t already have an online menu, TapOnThat can host one for you at a stable link like taponthat.com/menu/your-restaurant.',
      },
      {
        q: 'What are the dimensions?',
        a: 'A 90mm × 120mm printed face with a 15mm folded base, standing about 30mm deep on the table. Full-colour print on the front, matte laminated; the back is blank.',
      },
      {
        q: 'Can I update the menu without ordering a new stand?',
        a: 'Yes — the NFC tag points to a stable link, so prices, items and photos can change anytime without reprogramming or reprinting the stand.',
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
