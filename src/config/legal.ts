// Informations légales affichées dans « Mentions légales » et « Politique de confidentialité ».
// Toute valeur commençant par TODO est surlignée en jaune sur le site tant qu'elle n'est pas remplie.

export const TODO = 'À COMPLÉTER'

export const association = {
  // Nom exact tel que déclaré en préfecture (Journal officiel).
  name: 'Les Impro-Bables',
  legalForm: 'Association loi 1901',
  // Numéro RNA (W + 9 chiffres), sur le récépissé de déclaration en préfecture.
  rna: `${TODO} : numéro RNA (ex. W123456789)`,
  // Numéro SIRET : seulement si l'association en possède un, sinon laisser vide ('').
  siret: '',
  address: `${TODO} : adresse du siège social`,
  // Le téléphone est exigé par la loi pour une personne morale (LCEN, art. 6).
  phone: `${TODO} : numéro de téléphone`,
  // Directeur ou directrice de la publication : en général le ou la président·e.
  publicationDirector: `${TODO} : prénom et nom du ou de la président·e`,
}

// Hébergeur du site. Exemple si le site est publié avec GitHub Pages :
//   name: 'GitHub, Inc.', address: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis',
//   website: 'https://github.com'  (vérifier l'adresse et le téléphone sur leur site au moment de publier)
export const host = {
  name: `${TODO} : nom de l'hébergeur`,
  address: `${TODO} : adresse de l'hébergeur`,
  phone: `${TODO} : téléphone de l'hébergeur`,
  website: '',
}

// Durée de conservation des messages reçus par le formulaire de contact.
// À appliquer réellement : supprimer les anciens messages dans Formspark et dans la boîte mail.
export const contactRetention = '1 an après le dernier échange'

// Date de dernière mise à jour des pages légales (à changer à chaque modification).
export const legalUpdatedAt = '23 octobre 2026'
