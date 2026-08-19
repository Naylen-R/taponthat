import { Link } from 'react-router-dom'
import { Logo } from '../ui/Logo'
import { siteConfig } from '../../data/siteConfig'
import { SectionContainer } from '../ui/SectionContainer'

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-ink">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link to={link.href} className="text-sm text-muted hover:text-ink transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const hasSocial = Object.values(siteConfig.social).some(Boolean)

  return (
    <footer className="mt-auto border-t border-line bg-white">
      <SectionContainer className="py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-[26ch] text-sm text-muted">
              NFC tap cards that turn one simple tap into an instant destination.
            </p>
            {hasSocial && (
              <div className="mt-5 flex gap-3">
                {/* Social icons render here once real URLs are configured in siteConfig.js */}
              </div>
            )}
          </div>
          <FooterColumn title="Shop" links={siteConfig.footer.shop} />
          <FooterColumn title="Learn" links={siteConfig.footer.learn} />
          <FooterColumn title="Support" links={siteConfig.footer.support} />
          <FooterColumn title="Legal" links={siteConfig.footer.legal} />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Built for Canadian customers.</p>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-ink transition-colors">
              {siteConfig.email}
            </a>
            <span>{siteConfig.domain}</span>
            <span>© {new Date().getFullYear()} TapOnThat</span>
          </div>
        </div>
      </SectionContainer>
    </footer>
  )
}
