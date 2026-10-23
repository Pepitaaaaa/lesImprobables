import { AnchorIcon, HeroWave, NotesLeft, NotesRight, SectionHeading, StarDivider, Waves } from '../components/ui/Decorations'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'
import { members } from '../data/members'
import './HomePage.css'

function HomePage() {
  return (
    <div className="site-shell" id="accueil">
      <SiteHeader current="accueil" />

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
          <HeroWave />
        </section>

        <section className="members-section" id="membres" aria-labelledby="members-title">
          <div id="photos">
            <SectionHeading id="members-title">Nos membres</SectionHeading>
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

      <SiteFooter />
    </div>
  )
}

export default HomePage
