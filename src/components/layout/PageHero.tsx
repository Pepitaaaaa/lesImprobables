import type { ReactNode } from 'react'
import { HeroWave, NotesLeft, NotesRight, StarDivider, Waves } from '../ui/Decorations'

type Props = {
  title: string
  script?: string
  children?: ReactNode
  compact?: boolean
}

// Bandeau en haut des pages intérieures : titre, phrase manuscrite, étoile, texte d'introduction.
export function PageHero({ title, script, children, compact = false }: Props) {
  return (
    <section className={`hero-section page-hero${compact ? ' page-hero-compact' : ''}`}>
      <NotesLeft />
      <NotesRight />
      <Waves />
      <div className="hero-content">
        <h1>{title}</h1>
        {script && <p className="hero-script">{script}</p>}
        <StarDivider className="star-divider" />
        {children && <p className="hero-copy">{children}</p>}
      </div>
      <HeroWave />
    </section>
  )
}
