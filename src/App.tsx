import './App.css'

const members = [
  {
    name: 'Pierre Le Gall',
    instrument: 'Accordéoniste',
    image:
      'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=85',
    alt: 'Musicien jouant de la guitare',
  },
  {
    name: 'Maëlle Kerouac’h',
    instrument: 'Violoniste',
    image:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=85',
    alt: 'Musicienne chantant dans un micro',
  },
  {
    name: 'Yannick Le Breton',
    instrument: 'Bombardier',
    image:
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=85',
    alt: 'Musicien sur scène',
  },
  {
    name: 'Lucas Morvan',
    instrument: 'Guitariste',
    image:
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=85',
    alt: 'Concert en plein air',
  },
  {
    name: 'Élise Danion',
    instrument: 'Percussionniste',
    image:
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800&q=85',
    alt: 'Public réuni autour de la musique',
  },
  {
    name: 'Hugo Kervadec',
    instrument: 'Soubassophoniste',
    image:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=85',
    alt: 'Musicien dans un studio de musique',
  },
]

function AnchorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="4.5" r="2" />
      <path d="M12 6.5V21M7.5 10h9M4 13.5c0 4.2 3.6 7.5 8 7.5s8-3.3 8-7.5M2.5 14.5 4 13l1.5 1.5M18.5 14.5 20 13l1.5 1.5" />
    </svg>
  )
}

function StarDivider({ className }: { className: string }) {
  return (
    <div className={className} aria-hidden="true">
      <span />
      <svg viewBox="0 0 24 24"><path d="m12 2 2.9 6.9 7.1.6-5.4 4.7 1.7 7.3L12 17.6l-6.3 3.9 1.7-7.3L2 9.5l7.1-.6Z" /></svg>
      <span />
    </div>
  )
}

function NotesLeft() {
  return (
    <svg className="hero-notes hero-notes-left" viewBox="0 0 160 200" fill="currentColor" aria-hidden="true">
      <ellipse cx="40" cy="160" rx="18" ry="13" transform="rotate(-20 40 160)" />
      <ellipse cx="120" cy="140" rx="18" ry="13" transform="rotate(-20 120 140)" />
      <path d="M53 156V42h5v114ZM133 136V22h5v114Z" />
      <path d="M53 40 138 18v18L53 58ZM53 68l85-22v12L53 80Z" />
    </svg>
  )
}

function NotesRight() {
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

function Waves() {
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

function App() {
  return (
    <div className="site-shell" id="accueil">
      <header className="site-header">
        <div className="brand-rails" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <a className="brand-mark" href="#accueil" aria-label="Les Impro-Bables, accueil">
          <img className="brand-image" src="/logo-v2.png" alt="Logo des Impro-Bables" />
        </a>
        <nav className="main-nav" aria-label="Navigation principale">
          <a className="active" href="#accueil" aria-current="page">Accueil</a>
          <a href="#apropos">À propos</a>
          <a href="#membres">Membres</a>
          <a href="#photos">Photos</a>
          <a href="#contact">Contactez-nous</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="apropos">
          <NotesLeft />
          <NotesRight />
          <Waves />
          <div className="hero-content">
            <h1>Les Impro-Bables</h1>
            <p className="hero-script">Jouez ensemble, vivez ensemble !</p>
            <StarDivider className="star-divider" />
            <p className="hero-copy">
              Un groupe de musiciens passionnés qui partagent<br className="desktop-break" />{' '}
              la scène et la bonne humeur.
            </p>
            <a className="hero-button" href="#membres">
              Découvrir le groupe <AnchorIcon className="hero-button-icon" />
            </a>
          </div>
          <svg className="hero-wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 34c180-30 360-30 540-8s360 30 540 4 270-28 360-12v42H0Z" />
          </svg>
        </section>

        <section className="members-section" id="membres" aria-labelledby="members-title">
          <div className="section-heading" id="photos">
            <span className="heading-rule" aria-hidden="true" />
            <svg className="heading-star" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 2.9 6.9 7.1.6-5.4 4.7 1.7 7.3L12 17.6l-6.3 3.9 1.7-7.3L2 9.5l7.1-.6Z" /></svg>
            <h2 id="members-title">Nos membres</h2>
            <svg className="heading-star" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 2.9 6.9 7.1.6-5.4 4.7 1.7 7.3L12 17.6l-6.3 3.9 1.7-7.3L2 9.5l7.1-.6Z" /></svg>
            <span className="heading-rule" aria-hidden="true" />
          </div>
          <div className="member-grid">
            {members.map((member) => (
              <article className="member-card" key={member.name}>
                <img src={member.image} alt={member.alt} loading="lazy" />
                <div className="member-details">
                  <h3>{member.name}</h3>
                  <StarDivider className="mini-divider" />
                  <p>{member.instrument}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <svg className="footer-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path className="footer-wave-fill" d="M0 40c200-34 420-34 640-6s460 30 800-20v66H0Z" />
          <path className="footer-wave-line" d="M0 58c200-30 420-30 640-4s460 26 800-22" />
        </svg>
        <div className="footer-inner">
          <div className="footer-social">
            <p>Suivez-nous</p>
            <div className="social-links">
              <a href="https://www.facebook.com/" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 2a10 10 0 0 0-1.6 19.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 12 2Z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-brand">
            <AnchorIcon className="footer-anchor" />
            <p>Les Impro-Bables</p>
            <StarDivider className="footer-star" />
          </div>
          <div className="footer-legal">
            <p>Les Impro-Bables © 2024</p>
            <p>Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
