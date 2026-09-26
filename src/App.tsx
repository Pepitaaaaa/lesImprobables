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

function App() {
  return (
    <div className="site-shell" id="accueil">
      <header className="site-header">
        <div className="brand-rails" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <a className="brand-mark" href="#accueil" aria-label="Les Impro-Bables, accueil">
          <span className="brand-stars" aria-hidden="true">✦ · ✦</span>
          <span className="brand-name">Les<br />Impro-Bables</span>
          <span className="brand-instruments" aria-hidden="true">♫</span>
          <span className="brand-ribbon">Jouez ensemble, vivez ensemble</span>
        </a>
        <nav className="main-nav" aria-label="Navigation principale">
          <a className="active" href="#accueil">Accueil</a>
          <a href="#apropos">À propos</a>
          <a href="#membres">Membres</a>
          <a href="#photos">Photos</a>
          <a href="#contact">Contactez-nous</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="apropos">
          <div className="hero-decoration hero-decoration-left" aria-hidden="true">♫</div>
          <div className="hero-decoration hero-decoration-right" aria-hidden="true">♪</div>
          <div className="hero-content">
            <p className="eyebrow">Musique vivante · Bretagne</p>
            <h1>Les Impro-Bables</h1>
            <p className="hero-script">Jouez ensemble, vivez ensemble !</p>
            <div className="star-divider" aria-hidden="true"><span />★<span /></div>
            <p className="hero-copy">
              Un groupe de musiciens passionnés qui partagent<br className="desktop-break" />
              la scène et la bonne humeur.
            </p>
            <a className="hero-button" href="#membres">
              Découvrir le groupe <span aria-hidden="true">⚓</span>
            </a>
          </div>
        </section>

        <section className="members-section" id="membres" aria-labelledby="members-title">
          <div className="section-heading" id="photos">
            <span aria-hidden="true" />
            <span className="heading-star" aria-hidden="true">★</span>
            <h2 id="members-title">Nos membres</h2>
            <span className="heading-star" aria-hidden="true">★</span>
            <span aria-hidden="true" />
          </div>
          <div className="member-grid">
            {members.map((member) => (
              <article className="member-card" key={member.name}>
                <img src={member.image} alt={member.alt} loading="lazy" />
                <div className="member-details">
                  <h3>{member.name}</h3>
                  <div className="mini-divider" aria-hidden="true"><span />★<span /></div>
                  <p>{member.instrument}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-inner">
          <div className="footer-social">
            <p>Suivez-nous</p>
            <div className="social-links">
              <a href="https://www.facebook.com/" aria-label="Facebook">f</a>
              <a href="https://www.instagram.com/" aria-label="Instagram">◎</a>
            </div>
          </div>
          <div className="footer-brand">
            <span className="footer-anchor" aria-hidden="true">⚓</span>
            <p>Les Impro-Bables</p>
            <div className="footer-star" aria-hidden="true"><span />★<span /></div>
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
