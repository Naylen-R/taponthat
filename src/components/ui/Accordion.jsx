import { useState } from 'react'
import { IconChevron } from './icons'

export function Accordion({ items, defaultOpenIndex = -1 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex)

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        const panelId = `accordion-panel-${item.id ?? i}`
        return (
          <div key={item.id ?? i}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between py-5 text-left text-base font-medium text-ink"
              >
                {item.title}
                <IconChevron
                  className={`shrink-0 text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              hidden={!isOpen}
              className="pb-5 text-sm text-muted"
            >
              {item.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}
