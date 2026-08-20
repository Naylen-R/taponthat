// Central place for brand/config values that aren't tied to a specific product.
// Update social links once real accounts exist — empty values are hidden in the footer.
export const siteConfig = {
  name: 'TapOnThat',
  tagline: 'Tap. Connect. Done.',
  email: 'info@taponthat.com',
  domain: 'taponthat.com',
  currency: 'CAD',
  country: 'Canada',
  social: {
    instagram: '',
    tiktok: '',
    linkedin: '',
  },
  nav: [
    { label: 'Shop', href: '/shop' },
    { label: 'Custom', href: '/custom-orders' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'About', href: '/about' },
  ],
  footer: {
    shop: [
      { label: 'Book Now Card', href: '/products/book-now-nfc-card' },
      { label: 'Custom Orders', href: '/custom-orders' },
    ],
    learn: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'About', href: '/about' },
      { label: 'FAQ', href: '/faq' },
    ],
    support: [
      { label: 'Contact', href: '/contact' },
      { label: 'Shipping & Delivery', href: '/shipping' },
      { label: 'Returns & Refunds', href: '/returns' },
    ],
    legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
}
