import { SectionContainer } from './SectionContainer'
import { Reveal } from './Reveal'

export function LegalPageLayout({ title, updated, children }) {
  return (
    <SectionContainer className="py-14 sm:py-20">
      <Reveal className="mx-auto max-w-2xl">
        <h1 className="text-h2 font-semibold text-ink">{title}</h1>
        {updated && <p className="mt-2 text-sm text-muted">{updated}</p>}
        <div className="prose-content mt-8 flex flex-col gap-5 text-base leading-relaxed text-ink/80">
          {children}
        </div>
      </Reveal>
    </SectionContainer>
  )
}
