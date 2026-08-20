import { Hero } from '../components/home/Hero'
import { BenefitsSection } from '../components/home/BenefitsSection'
import { HowItWorksSection } from '../components/home/HowItWorksSection'
import { FeaturedProduct } from '../components/home/FeaturedProduct'
import { UseCasesSection } from '../components/home/UseCasesSection'
import { CustomOrdersBanner } from '../components/home/CustomOrdersBanner'
import { TapDemo } from '../components/home/TapDemo'
import { TrustStrip } from '../components/home/TrustStrip'
import { FinalCTA } from '../components/home/FinalCTA'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta({
    title: 'TapOnThat — Tap. Connect. Done.',
    description:
      'NFC tap cards that open your booking page instantly. No app required. Shop the Book Now Card or request a custom design for your business.',
  })

  return (
    <>
      <Hero />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedProduct />
      <UseCasesSection />
      <CustomOrdersBanner />
      <TapDemo />
      <TrustStrip />
      <FinalCTA />
    </>
  )
}
