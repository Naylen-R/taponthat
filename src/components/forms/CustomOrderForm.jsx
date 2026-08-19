import { useState } from 'react'
import { CTAButton } from '../ui/CTAButton'

const fieldClass =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70 focus-visible:outline-2 focus-visible:outline-ink transition-colors'
const labelClass = 'text-sm font-medium text-ink'

// No backend exists yet — submission is handled locally (see the TODO below). Wire this up to
// a form service (e.g. Formspree) or a small serverless function that emails info@taponthat.com.
export function CustomOrderForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    // TODO: replace with a real submission call once a backend/form service is connected.
    window.setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  if (submitted) {
    return (
      <div className="rounded-card border border-line bg-mist p-10 text-center sm:p-14">
        <h3 className="text-xl font-semibold text-ink">Request received.</h3>
        <p className="mx-auto mt-2 max-w-[42ch] text-muted">
          Thanks for the details — our team will follow up by email to review your idea and
          confirm a quote.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" type="text" required className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="business">
            Business name
          </label>
          <input id="business" name="business" type="text" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" required className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="productType">
            Product type
          </label>
          <select id="productType" name="productType" className={fieldClass} defaultValue="Custom NFC Card">
            <option>Custom NFC Card</option>
            <option>Custom NFC Card — Bulk / Team</option>
            <option>Other / Not sure yet</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="quantity">
            Quantity
          </label>
          <input id="quantity" name="quantity" type="number" min="1" className={fieldClass} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="destination">
          Intended NFC use / destination
        </label>
        <input
          id="destination"
          name="destination"
          type="text"
          placeholder="e.g. booking page, website, social profile"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="artwork">
          Logo / artwork upload
        </label>
        <input
          id="artwork"
          name="artwork"
          type="file"
          accept="image/*,.pdf,.ai,.eps"
          className={`${fieldClass} file:mr-4 file:rounded-pill file:border-0 file:bg-ink file:px-4 file:py-2 file:text-sm file:font-medium file:text-white`}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="finish">
            Desired printing / finish
          </label>
          <input id="finish" name="finish" type="text" placeholder="e.g. matte black, gloss" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="deadline">
            Deadline
          </label>
          <input id="deadline" name="deadline" type="date" className={fieldClass} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="delivery">
          Delivery location
        </label>
        <input id="delivery" name="delivery" type="text" placeholder="City, Province" className={fieldClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="notes">
          Additional notes
        </label>
        <textarea id="notes" name="notes" rows={4} className={fieldClass} />
      </div>

      <CTAButton type="submit" disabled={submitting} className="w-full sm:w-auto sm:self-start">
        {submitting ? 'Sending…' : 'Request Custom Order'}
      </CTAButton>
    </form>
  )
}
