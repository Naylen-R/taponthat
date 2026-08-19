import { SectionContainer } from '../components/ui/SectionContainer'
import { Accordion } from '../components/ui/Accordion'
import { Reveal } from '../components/ui/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'

const faqs = [
  {
    id: 'app',
    title: 'Do I need an app to use a TapOnThat card?',
    content: 'No. Anyone tapping the card just needs a compatible smartphone — nothing to install.',
  },
  {
    id: 'compat',
    title: 'What phones are compatible?',
    content: 'Most modern NFC-enabled smartphones work out of the box.',
  },
  {
    id: 'change',
    title: 'Can I change where my card points later?',
    content: 'Yes — cards are reprogrammable, so your destination can be updated as your business changes.',
  },
  {
    id: 'custom',
    title: "What's the difference between a standard and custom order?",
    content: 'Standard products (like the Book Now Card) purchase instantly through the shop. Custom orders — your logo, design, and destination — go through a short quote request first.',
  },
  {
    id: 'shipping',
    title: 'Where do you ship?',
    content: 'We currently ship across Canada only.',
  },
]

export default function FAQ() {
  usePageMeta({ title: 'FAQ — TapOnThat', description: 'Frequently asked questions about TapOnThat NFC cards.' })

  return (
    <SectionContainer className="py-14 sm:py-20">
      <Reveal className="mx-auto max-w-2xl">
        <h1 className="text-h2 font-semibold text-ink">Frequently Asked Questions</h1>
        <div className="mt-8">
          <Accordion items={faqs} />
        </div>
      </Reveal>
    </SectionContainer>
  )
}
