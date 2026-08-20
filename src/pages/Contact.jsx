import { useState } from 'react'
import { SectionContainer } from '../components/ui/SectionContainer'
import { CTAButton } from '../components/ui/CTAButton'
import { Reveal } from '../components/ui/Reveal'
import { siteConfig } from '../data/siteConfig'
import { usePageMeta } from '../hooks/usePageMeta'

const fieldClass =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70 focus-visible:outline-2 focus-visible:outline-ink transition-colors'

// No backend exists yet — submission is simulated locally. Wire to a form service or serverless
// function that emails info@taponthat.com before launch.
export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  usePageMeta({ title: 'Contact — TapOnThat', description: 'Get in touch with TapOnThat.' })

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <SectionContainer className="py-14 sm:py-20">
      <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2">
        <Reveal>
          <h1 className="text-h2 font-semibold text-ink">Contact</h1>
          <p className="mt-3 max-w-[38ch] text-muted">
            Questions about an order, shipping, or anything else? Reach out and we'll get back to
            you.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-6 inline-block text-lg font-medium text-ink underline underline-offset-4"
          >
            {siteConfig.email}
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          {submitted ? (
            <div className="rounded-card border border-line bg-mist p-8 text-center">
              <h2 className="text-lg font-semibold text-ink">Message sent.</h2>
              <p className="mt-2 text-muted">We'll be in touch by email shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-sm font-medium text-ink">
                  Name
                </label>
                <input id="contact-name" name="name" type="text" required className={fieldClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-sm font-medium text-ink">
                  Email
                </label>
                <input id="contact-email" name="email" type="email" required className={fieldClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="text-sm font-medium text-ink">
                  Message
                </label>
                <textarea id="contact-message" name="message" rows={5} required className={fieldClass} />
              </div>
              <CTAButton type="submit" className="self-start">
                Send Message
              </CTAButton>
            </form>
          )}
        </Reveal>
      </div>
    </SectionContainer>
  )
}
