import { Info, LegalLayout } from '../../components/layout/LegalLayout'
import { association, contactRetention, host } from '../../config/legal'
import { pageHref } from '../../lib/links'

function ConfidentialitePage() {
  const contactLink = <a href={pageHref('confidentialite', 'contact')}>formulaire de contact</a>

  return (
    <LegalLayout
      current="confidentialite"
      title="Politique de confidentialité"
      script="Vos données, notre responsabilité"
      intro={<>Ce que nous collectons, pourquoi,<br className="desktop-break" /> et comment exercer vos droits.</>}
    >
      <p>
        L’association {association.name} attache une grande importance à la protection de vos données personnelles.
        Cette page explique quelles données sont collectées sur ce site, pourquoi, et comment exercer vos droits,
        conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.
      </p>

      <h2>Responsable du traitement</h2>
      <p>
        {association.name}, {association.legalForm}, dont le siège est situé <Info value={association.address} />,
        représentée par <Info value={association.publicationDirector} />.
      </p>

      <h2>Les données collectées</h2>

      <h3>Formulaire de contact</h3>
      <ul>
        <li><strong>Données :</strong> nom, adresse e-mail, sujet et contenu de votre message.</li>
        <li><strong>Finalité :</strong> répondre à votre demande (renseignement, concert, adhésion…).</li>
        <li><strong>Base légale :</strong> l’intérêt légitime de l’association à répondre aux demandes qui lui sont adressées.</li>
        <li>
          <strong>Destinataires :</strong> les membres du bureau chargés de répondre, et notre prestataire Formspark, qui
          transmet les messages par e-mail. Formspark héberge les données dans l’Union européenne (Irlande).
        </li>
        <li><strong>Durée de conservation :</strong> {contactRetention}, puis suppression.</li>
      </ul>
      <p>Vos données ne sont jamais vendues, louées ni utilisées à des fins publicitaires.</p>

      <h3>Membres présentés sur le site</h3>
      <ul>
        <li><strong>Données :</strong> prénom, nom, instrument et photo des membres qui l’ont accepté.</li>
        <li><strong>Finalité :</strong> présenter le groupe au public.</li>
        <li><strong>Base légale :</strong> le consentement de chaque membre, qu’il peut retirer à tout moment.</li>
        <li><strong>Durée de conservation :</strong> tant que la personne est membre et n’a pas retiré son accord.</li>
      </ul>

      <h3>Hébergement du site</h3>
      <p>
        Comme tout site web, l’hébergeur (<Info value={host.name} />) enregistre techniquement l’adresse IP des
        visiteurs afin d’assurer le fonctionnement et la sécurité du service. L’association n’exploite pas ces données.
      </p>

      <h2>Cookies et mesure d’audience</h2>
      <p>
        Ce site <strong>n’utilise aucun cookie</strong> et aucun outil de mesure d’audience ou de publicité. C’est
        pourquoi aucun bandeau de consentement ne s’affiche. Les polices de caractères sont hébergées sur le site
        lui-même : aucune donnée n’est transmise à Google ou à un autre service tiers lors de votre visite.
      </p>
      <p>
        Les liens vers nos réseaux sociaux sont de simples liens : aucune donnée n’est envoyée à ces plateformes tant que
        vous ne cliquez pas dessus.
      </p>

      <h2>Vos droits</h2>
      <p>Vous disposez à tout moment des droits suivants sur vos données :</p>
      <ul>
        <li>droit d’accès et de rectification ;</li>
        <li>droit à l’effacement ;</li>
        <li>droit d’opposition et de limitation du traitement ;</li>
        <li>droit à la portabilité ;</li>
        <li>droit de retirer votre consentement (pour les membres présentés sur le site).</li>
      </ul>
      <p>
        Pour les exercer, écrivez-nous via le {contactLink} ou par courrier au siège de l’association. Nous vous
        répondons dans un délai maximum d’un mois.
      </p>
      <p>
        Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL :{' '}
        <a href="https://www.cnil.fr/fr/plaintes">www.cnil.fr/fr/plaintes</a>.
      </p>
    </LegalLayout>
  )
}

export default ConfidentialitePage
