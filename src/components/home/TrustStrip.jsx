import { SectionContainer } from '../ui/SectionContainer'
import { IconMapleLeaf, IconShield, IconTruck } from '../ui/icons'

const items = [
  { icon: IconMapleLeaf, label: 'Canadian Business' },
  { icon: IconShield, label: 'Secure Checkout' },
  { icon: IconTruck, label: 'Shipping Across Canada' },
]

export function TrustStrip() {
  return (
    <SectionContainer as="div" className="border-y border-line bg-white py-8">
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:justify-between">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5 text-sm font-medium text-ink/80">
            <item.icon className="text-ink/60" />
            {item.label}
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
