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
      <div className="relative aspect-square rounded-card border border-line bg-mist">
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt ?? productName}
          className="absolute inset-5 h-[calc(100%-2.5rem)] w-[calc(100%-2.5rem)] object-contain"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`relative h-16 w-16 overflow-hidden rounded-xl border bg-mist ${
                i === activeIndex ? 'border-ink' : 'border-line'
              }`}
              aria-label={`View image ${i + 1} of ${productName}`}
              aria-current={i === activeIndex}
            >
              <img
                src={img.src}
                alt=""
                className="absolute inset-1.5 h-[calc(100%-0.75rem)] w-[calc(100%-0.75rem)] object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
