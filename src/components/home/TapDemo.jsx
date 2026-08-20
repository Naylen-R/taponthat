import { useEffect, useRef, useState } from 'react'
import { SectionContainer, SectionHeading } from '../ui/SectionContainer'
import { Reveal } from '../ui/Reveal'

const STAGES = { IDLE: 'idle', TAPPING: 'tapping', CONNECTED: 'connected' }

export function TapDemo() {
  const [stage, setStage] = useState(STAGES.IDLE)
  const timers = useRef([])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  function handleTap() {
    if (stage !== STAGES.IDLE) return
    setStage(STAGES.TAPPING)
    timers.current.push(setTimeout(() => setStage(STAGES.CONNECTED), 700))
  }

  function reset() {
    setStage(STAGES.IDLE)
  }

  return (
    <SectionContainer className="py-16 sm:py-20 lg:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Try It"
          title="See what happens when you tap."
          align="center"
        />
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-12 max-w-md">
        <div className="flex flex-col items-center gap-8 rounded-card border border-line bg-mist p-8 sm:p-12">
          <div className="relative flex h-40 w-full items-center justify-center">
            {/* card */}
            <div className="relative z-0 h-24 w-16 rounded-[10px] bg-ink" aria-hidden="true">
              {stage !== STAGES.IDLE && (
                <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink motion-safe:animate-[nfcPulse_1s_ease-out]" />
              )}
            </div>
            {/* phone */}
            <div
              className={`absolute z-10 h-28 w-14 rounded-[12px] border-2 border-ink bg-white shadow-soft transition-transform duration-700 ease-premium ${
                stage === STAGES.IDLE ? 'translate-x-16 translate-y-4 rotate-6' : '-translate-x-2 -translate-y-2 rotate-0'
              }`}
              aria-hidden="true"
            >
              <div className="mx-auto mt-2 h-1 w-4 rounded-full bg-ink/20" />
            </div>
          </div>

          <div className="min-h-[104px] w-full">
            {stage !== STAGES.CONNECTED ? (
              <button
                type="button"
                onClick={handleTap}
                className="w-full rounded-pill bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-opacity duration-300 hover:opacity-85 disabled:opacity-60"
                disabled={stage === STAGES.TAPPING}
              >
                {stage === STAGES.TAPPING ? 'Connecting…' : 'Tap the card'}
              </button>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="rounded-xl border border-line bg-white p-4 text-left">
                  <p className="text-[10px] font-medium uppercase tracking-wide text-muted">
                    yourbusiness.com/book
                  </p>
                  <p className="mt-2 text-sm font-semibold text-ink">Book an appointment</p>
                  <div className="mt-2 h-1.5 w-3/4 rounded-full bg-mist" />
                  <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-mist" />
                </div>
                <button
                  type="button"
                  onClick={reset}
                  className="text-sm font-medium text-muted underline-offset-2 hover:text-ink hover:underline"
                >
                  Tap again
                </button>
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  )
}
