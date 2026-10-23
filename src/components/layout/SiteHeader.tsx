import logoUrl from '../../assets/images/logo-v2.png'
import { mainNav, type PageId } from '../../config/navigation'
import { pageHref } from '../../lib/links'

export function SiteHeader({ current }: { current: PageId }) {
  return (
    <header className="site-header">
      <div className="brand-rails" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <a className="brand-mark" href={pageHref(current, 'accueil')} aria-label="Les Impro-Bables, accueil">
        <img className="brand-image" src={logoUrl} alt="Logo des Impro-Bables" />
      </a>
      <nav className="main-nav" aria-label="Navigation principale">
        {mainNav.map((link) => {
          const active = link.page === current && !link.hash
          return (
            <a
              key={link.label}
              className={active ? 'active' : undefined}
              href={pageHref(current, link.page, link.hash)}
              aria-current={active ? 'page' : undefined}
            >
              {link.label}
            </a>
          )
        })}
      </nav>
    </header>
  )
}
