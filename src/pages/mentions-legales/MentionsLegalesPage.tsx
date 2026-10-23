import { Info, LegalLayout } from '../../components/layout/LegalLayout'
import { association, host } from '../../config/legal'
import { pageHref } from '../../lib/links'

function MentionsLegalesPage() {
  return (
    <LegalLayout
      current="mentions-legales"
      title="Mentions légales"
      script="En toute transparence"
      intro={<>Qui édite ce site, qui l’héberge,<br className="desktop-break" /> et les règles d’utilisation de son contenu.</>}
    >
      <h2>Éditeur du site</h2>
      <dl>
        <dt>Nom</dt>
        <dd>{association.name}</dd>
        <dt>Forme juridique</dt>
        <dd>{association.legalForm}</dd>
        <dt>Numéro RNA</dt>
        <dd><Info value={association.rna} /></dd>
        {association.siret && (
          <>
            <dt>SIRET</dt>
            <dd><Info value={association.siret} /></dd>
          </>
        )}
        <dt>Siège social</dt>
        <dd><Info value={association.address} /></dd>
        <dt>Téléphone</dt>
        <dd><Info value={association.phone} /></dd>
        <dt>Contact</dt>
        <dd>
          via le <a href={pageHref('mentions-legales', 'contact')}>formulaire de contact</a>
        </dd>
      </dl>

      <h2>Directeur ou directrice de la publication</h2>
      <p><Info value={association.publicationDirector} />, en qualité de représentant·e légal·e de l’association.</p>

      <h2>Hébergement</h2>
      <dl>
        <dt>Hébergeur</dt>
        <dd><Info value={host.name} /></dd>
        <dt>Adresse</dt>
        <dd><Info value={host.address} /></dd>
        <dt>Téléphone</dt>
        <dd><Info value={host.phone} /></dd>
        {host.website && (
          <>
            <dt>Site web</dt>
            <dd><a href={host.website}>{host.website}</a></dd>
          </>
        )}
      </dl>

      <h2>Propriété intellectuelle</h2>
      <p>
        Le logo, les textes, les photographies et l’ensemble des éléments graphiques de ce site sont la propriété de
        l’association {association.name} ou de leurs auteurs respectifs. Toute reproduction ou réutilisation, totale ou
        partielle, sans autorisation préalable est interdite.
      </p>
      <p>
        Les polices de caractères Playfair Display, Inter et Dancing Script sont distribuées sous licence libre
        SIL Open Font License et hébergées directement sur ce site.
      </p>

      <h2>Droit à l’image</h2>
      <p>
        Les membres présentés sur ce site ont donné leur accord pour la publication de leur nom et de leur photo. Chacun
        peut demander à tout moment le retrait de ces informations via le{' '}
        <a href={pageHref('mentions-legales', 'contact')}>formulaire de contact</a> ; la demande est traitée dans les
        meilleurs délais.
      </p>

      <h2>Liens externes</h2>
      <p>
        Le site contient des liens vers d’autres sites (réseaux sociaux notamment). L’association n’est pas responsable
        de leur contenu ni de leur politique de confidentialité.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Pour savoir quelles données sont collectées et comment exercer vos droits, consultez notre{' '}
        <a href={pageHref('mentions-legales', 'confidentialite')}>politique de confidentialité</a>.
      </p>
    </LegalLayout>
  )
}

export default MentionsLegalesPage
