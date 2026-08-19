export function QuantitySelector({ quantity, onChange }) {
  return (
    <div className="inline-flex items-center rounded-pill border border-line" role="group" aria-label="Quantity">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, quantity - 1))}
        className="flex h-11 w-11 items-center justify-center text-lg text-ink hover:bg-mist rounded-l-pill"
        aria-label="Decrease quantity"
      >
        –
      </button>
      <span className="w-8 text-center text-base font-medium" aria-live="polite">
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onChange(quantity + 1)}
        className="flex h-11 w-11 items-center justify-center text-lg text-ink hover:bg-mist rounded-r-pill"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}
