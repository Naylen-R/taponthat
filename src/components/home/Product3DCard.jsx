import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

// Animated digital stand-in for the physical Book Now NFC Card (86.4mm x 54mm, ~1mm thick).
// The face content is a CSS recreation of the Prototype 3 card design (NFC Enabled mark,
// TapOnThat wordmark, Book Now). Real front/back photography lives on the product page —
// see the `images` field on the book-now-nfc-card entry in src/data/products.js.
export function Product3DCard({ size = 'lg', spin = false }) {
  const wrapperRef = useRef(null)
  const cardRef = useRef(null)
  const reducedMotion = usePrefersReducedMotion()
  const dragState = useRef({ dragging: false, startX: 0, rotY: spin ? 0 : -10 })
  const isVisible = useRef(true)
  const isHovering = useRef(false)

  // Pause the continuous CSS keyframe animation whenever the card scrolls out of view —
  // it's a cheap check but it stops burning compositor time on offscreen 3D transforms.
  useEffect(() => {
    if (reducedMotion) return
    const wrapper = wrapperRef.current
    const card = cardRef.current
    if (!wrapper || !card) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting
        if (!isHovering.current) {
          card.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused'
        }
      },
      { threshold: 0 },
    )
    observer.observe(wrapper)
    return () => observer.disconnect()
  }, [reducedMotion])

  useEffect(() => {
    if (reducedMotion) return
    const wrapper = wrapperRef.current
    const card = cardRef.current
    if (!wrapper || !card) return

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!canHover) return

    let raf = null

    function handleMove(e) {
      const rect = wrapper.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        card.style.transform = spin
          ? `rotateX(35deg) rotateY(${(x * 40).toFixed(2)}deg) translateY(-4px)`
          : `rotateX(${(-y * 14 + 6).toFixed(2)}deg) rotateY(${(x * 18 - 10).toFixed(2)}deg) translateY(-4px)`
      })
    }

    function handleEnter() {
      isHovering.current = true
      card.style.animationPlayState = 'paused'
    }

    function handleLeave() {
      isHovering.current = false
      card.style.transform = ''
      card.style.animationPlayState = isVisible.current ? 'running' : 'paused'
    }

    wrapper.addEventListener('pointermove', handleMove)
    wrapper.addEventListener('pointerenter', handleEnter)
    wrapper.addEventListener('pointerleave', handleLeave)
    return () => {
      wrapper.removeEventListener('pointermove', handleMove)
      wrapper.removeEventListener('pointerenter', handleEnter)
      wrapper.removeEventListener('pointerleave', handleLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [reducedMotion])

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    function handleTouchStart(e) {
      dragState.current.dragging = true
      dragState.current.startX = e.touches[0].clientX
      card.style.animationPlayState = 'paused'
    }
    function handleTouchMove(e) {
      if (!dragState.current.dragging) return
      const delta = e.touches[0].clientX - dragState.current.startX
      const rotY = dragState.current.rotY + delta / 6
      card.style.transform = spin ? `rotateX(35deg) rotateY(${rotY}deg)` : `rotateX(6deg) rotateY(${rotY}deg)`
    }
    function handleTouchEnd(e) {
      if (!dragState.current.dragging) return
      const delta = (e.changedTouches[0]?.clientX ?? 0) - dragState.current.startX
      dragState.current.rotY += delta / 6
      dragState.current.dragging = false
      window.setTimeout(() => {
        card.style.transform = ''
        card.style.animationPlayState = reducedMotion || !isVisible.current ? 'paused' : 'running'
      }, 400)
    }

    card.addEventListener('touchstart', handleTouchStart, { passive: true })
    card.addEventListener('touchmove', handleTouchMove, { passive: true })
    card.addEventListener('touchend', handleTouchEnd)
    return () => {
      card.removeEventListener('touchstart', handleTouchStart)
      card.removeEventListener('touchmove', handleTouchMove)
      card.removeEventListener('touchend', handleTouchEnd)
    }
  }, [reducedMotion])

  const sizes = {
    md: 'w-[240px] sm:w-[280px]',
    lg: 'w-[280px] sm:w-[360px] lg:w-[420px]',
  }

  return (
    <div
      ref={wrapperRef}
      className={`perspective-1000 mx-auto ${sizes[size]} touch-pan-y select-none`}
    >
      <div
        ref={cardRef}
        className={`relative aspect-[86.4/54] w-full rounded-[18px] bg-ink shadow-card transform-gpu [transform-style:preserve-3d] ${
          reducedMotion ? '' : spin ? 'animate-[cardSpin_18s_linear_infinite]' : 'animate-[cardIdle_9s_ease-in-out_infinite]'
        }`}
        style={
          reducedMotion
            ? { transform: spin ? 'rotateX(35deg) rotateY(-20deg)' : 'rotateX(5deg) rotateY(-10deg)' }
            : undefined
        }
      >
        {/* card thickness illusion */}
        <div className="absolute inset-0 -z-10 translate-x-1 translate-y-1.5 rounded-[18px] bg-black/70 [transform:translateZ(-4px)]" />

        {/* card face */}
        <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[18px] p-[6%]">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                'linear-gradient(115deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.06) 100%)',
            }}
          />
          <div className="flex flex-col items-start gap-1.5">
            <NfcMark size={22} />
            <span className="text-[clamp(7px,1.6vw,9px)] font-semibold uppercase tracking-[0.16em] text-white/60">
              NFC Enabled
            </span>
          </div>
          <div>
            <p className="text-[clamp(20px,5.5vw,32px)] font-semibold leading-none text-white">
              TapOnThat
            </p>
            <p className="mt-2 text-[clamp(9px,2vw,12px)] font-medium uppercase tracking-[0.32em] text-white/60">
              Book Now
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function NfcMark({ size = 20 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.85"
      aria-hidden="true"
    >
      <path d="M4 9a8 8 0 0 1 8-8" />
      <path d="M4 14a13 13 0 0 1 13-13" />
      <circle cx="12" cy="12" r="1.6" fill="white" stroke="none" />
    </svg>
  )
}
