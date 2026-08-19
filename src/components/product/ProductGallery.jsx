import { useState } from 'react'
import { Product3DCard } from '../home/Product3DCard'

// Falls back to the interactive 3D card when no real product photography exists yet.
// Pass `images` (array of { src, alt }) once photography is available to enable thumbnails.
export function ProductGallery({ images = [], productName }) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (images.length === 0) {
    return (
      <div className="rounded-card border border-line bg-mist p-10 sm:p-14">
        <Product3DCard size="lg" />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex aspect-square items-center justify-center rounded-card border border-line bg-mist p-8">
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt ?? productName}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`h-16 w-16 overflow-hidden rounded-xl border ${
                i === activeIndex ? 'border-ink' : 'border-line'
              }`}
              aria-label={`View image ${i + 1} of ${productName}`}
              aria-current={i === activeIndex}
            >
              <img src={img.src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
