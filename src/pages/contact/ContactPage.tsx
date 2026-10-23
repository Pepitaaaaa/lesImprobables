import { useState, type FormEvent } from 'react'
import { PageHero } from '../../components/layout/PageHero'
import { SiteFooter } from '../../components/layout/SiteFooter'
import { SiteHeader } from '../../components/layout/SiteHeader'
import { BackLink } from '../../components/ui/BackLink'
import { FORMSPARK_FORM_ID, FORMSPARK_URL } from '../../config/formspark'
import { pageHref } from '../../lib/links'
import './ContactPage.css'

type Status = 'idle' | 'sending' | 'sent' | 'error'

function ContactPage() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))

    if (!FORMSPARK_FORM_ID) {
      console.error('FORMSPARK_FORM_ID est vide dans src/config.ts')
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(FORMSPARK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error(`Formspark a répondu ${response.status}`)
      form.reset()
      setStatus('sent')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <div className="site-shell">
      <SiteHeader current="contact" />

      <main>
        <PageHero title="Contactez-nous" script="Une question, un concert, une envie de jouer ?">
          Écrivez-nous, nous vous répondrons<br className="desktop-break" />{' '}
          dans les meilleurs délais.
        </PageHero>

        <section className="contact-section" aria-label="Formulaire de contact">
          <BackLink href={pageHref('contact', 'accueil')} label="Retour à l’accueil" />
          <form className="contact-card" onSubmit={handleSubmit}>
            <div className="contact-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Nom</label>
                <input id="contact-name" name="nom" type="text" autoComplete="name" required maxLength={100} />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email">E-mail</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={150} />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">Sujet</label>
              <select id="contact-subject" name="sujet" defaultValue="Renseignement">
                <option>Renseignement</option>
                <option>Demande de concert / animation</option>
                <option>Rejoindre le groupe</option>
                <option>Autre</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows={6} required maxLength={3000} />
            </div>

            {/* Piège à robots : invisible pour les humains, Formspark rejette l'envoi s'il est rempli. */}
            <input className="contact-honeypot" type="text" name="_honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <p className="contact-privacy">
              Les informations saisies servent uniquement à répondre à votre demande. Elles sont transmises par
              e-mail à l’association via notre prestataire Formspark (données hébergées dans l’Union européenne)
              et ne sont ni revendues ni utilisées à des fins commerciales. Vous pouvez demander leur suppression
              à tout moment en nous écrivant. En savoir plus :{' '}
              <a href={pageHref('contact', 'confidentialite')}>politique de confidentialité</a>.
            </p>

            <div className="contact-actions">
              <button className="hero-button" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
              </button>
            </div>

            <p className="contact-status" role="status" aria-live="polite">
              {status === 'sent' && <span className="contact-status-ok">Merci ! Votre message a bien été envoyé.</span>}
              {status === 'error' && (
                <span className="contact-status-error">
                  Oups, l’envoi a échoué. Réessayez dans un instant ou écrivez-nous via nos réseaux.
                </span>
              )}
            </p>
          </form>
        </section>
      </main>

      <SiteFooter current="contact" />
    </div>
  )
}

export default ContactPage
