const starPath = 'm12 2 2.9 6.9 7.1.6-5.4 4.7 1.7 7.3L12 17.6l-6.3 3.9 1.7-7.3L2 9.5l7.1-.6Z'

export function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d={starPath} />
    </svg>
  )
}

export function AnchorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="4.5" r="2" />
      <path d="M12 6.5V21M7.5 10h9M4 13.5c0 4.2 3.6 7.5 8 7.5s8-3.3 8-7.5M2.5 14.5 4 13l1.5 1.5M18.5 14.5 20 13l1.5 1.5" />
    </svg>
  )
}

export function StarDivider({ className }: { className: string }) {
  return (
    <div className={className} aria-hidden="true">
      <span />
      <StarIcon />
      <span />
    </div>
  )
}

export function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <div className="section-heading">
      <span className="heading-rule" aria-hidden="true" />
      <StarIcon className="heading-star" />
      <h2 id={id}>{children}</h2>
      <StarIcon className="heading-star" />
      <span className="heading-rule" aria-hidden="true" />
    </div>
  )
}

export function NotesLeft() {
  return (
    <svg className="hero-notes hero-notes-left" viewBox="0 0 160 200" fill="currentColor" aria-hidden="true">
      <ellipse cx="40" cy="160" rx="18" ry="13" transform="rotate(-20 40 160)" />
      <ellipse cx="120" cy="140" rx="18" ry="13" transform="rotate(-20 120 140)" />
      <path d="M53 156V42h5v114ZM133 136V22h5v114Z" />
      <path d="M53 40 138 18v18L53 58ZM53 68l85-22v12L53 80Z" />
    </svg>
  )
}

export function NotesRight() {
  return (
    <svg className="hero-notes hero-notes-right" viewBox="0 0 120 90" fill="currentColor" aria-hidden="true">
      <ellipse cx="30" cy="72" rx="11" ry="8" transform="rotate(-20 30 72)" />
      <path d="M38 70V12h3v58Z" />
      <path d="M41 12c2 10 16 14 14 32-2-10-8-14-14-16Z" />
      <ellipse cx="88" cy="48" rx="8" ry="6" transform="rotate(-20 88 48)" />
      <path d="M94 47V6h2.5v41Z" />
      <path d="M96.5 6c1.5 8 12 10 10 24-1.5-8-6-10-10-12Z" />
    </svg>
  )
}

export function Waves() {
  return (
    <svg className="hero-waves" viewBox="0 0 300 140" fill="none" stroke="currentColor" strokeLinecap="round" aria-hidden="true">
      {Array.from({ length: 9 }, (_, index) => (
        <path
          key={index}
          d={`M0 ${30 + index * 12}c20-10 40 10 60 0s40-10 60 0 40 10 60 0 40-10 60 0 40 10 60 0`}
          strokeWidth="0.9"
          transform={`translate(${index * 6} 0)`}
        />
      ))}
    </svg>
  )
}

export function HeroWave() {
  return (
    <svg className="hero-wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 34c180-30 360-30 540-8s360 30 540 4 270-28 360-12v42H0Z" />
    </svg>
  )
}
