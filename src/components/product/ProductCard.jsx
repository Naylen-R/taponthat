import { Link } from 'react-router-dom'
import { formatPrice } from '../../lib/format'

export function ProductCard({ product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-card border border-line bg-white transition-shadow duration-300 hover:shadow-card">
      <Link
        to={`/products/${product.slug}`}
        className="relative flex aspect-[4/3] items-center justify-center bg-mist"
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)] object-contain transition-transform duration-500 ease-premium group-hover:scale-[1.03]"
          />
        ) : (
          <div className="aspect-[86.4/54] w-2/3 rounded-[12px] bg-ink transition-transform duration-500 ease-premium group-hover:scale-[1.03]" />
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-1.5 p-6">
        <h3 className="text-base font-semibold text-ink">
          <Link to={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="text-sm text-muted">{product.shortDescription}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-semibold text-ink">{formatPrice(product.price, product.currency)}</span>
          <Link
            to={`/products/${product.slug}`}
            className="text-sm font-semibold text-ink underline-offset-4 hover:underline"
          >
            View Product
          </Link>
        </div>
      </div>
    </div>
  )
}
