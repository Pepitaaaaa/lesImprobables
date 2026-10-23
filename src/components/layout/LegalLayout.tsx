import type { ReactNode } from 'react'
import type { PageId } from '../../config/navigation'
import { TODO, legalUpdatedAt } from '../../config/legal'
import { pageHref } from '../../lib/links'
import { BackLink } from '../ui/BackLink'
import { PageHero } from './PageHero'
import { SiteFooter } from './SiteFooter'
import './LegalLayout.css'

type Props = { current: PageId; title: string; script: string; intro: ReactNode; children: ReactNode }

// Mise en page commune aux pages légales : flèche retour, bandeau et carte de texte (sans logo ni menu).
export function LegalLayout({ current, title, script, intro, children }: Props) {
  return (
    <div className="site-shell">
      <div className="legal-topbar">
        <BackLink href={pageHref(current, 'accueil')} label="Retour à l’accueil" className="legal-back" />
      </div>
      <main>
        <PageHero title={title} script={script} compact>
          {intro}
        </PageHero>
        <section className="legal-section">
          <article className="legal-card">
            {children}
            <p className="legal-updated">Dernière mise à jour : {legalUpdatedAt}</p>
          </article>
        </section>
      </main>
      <SiteFooter current={current} />
    </div>
  )
}

// Affiche une information légale ; surlignée tant qu'elle reste à compléter.
export function Info({ value }: { value: string }) {
  return value.startsWith(TODO) ? <mark className="legal-todo">[{value}]</mark> : <>{value}</>
}
