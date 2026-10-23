// Liste des pages du site. `path` = dossier dans src/pages/ (et donc l'URL), '' pour l'accueil.
// Pour ajouter une page : l'ajouter ici, puis dans `mainNav` si elle doit apparaître dans le menu.
export const pages = {
  accueil: { path: '' },
  contact: { path: 'contact/' },
} as const

export type PageId = keyof typeof pages

type NavLink = { label: string; page: PageId; hash?: string }

// Menu principal, dans l'ordre d'affichage.
export const mainNav: NavLink[] = [
  { label: 'Accueil', page: 'accueil' },
  { label: 'À propos', page: 'accueil', hash: 'apropos' },
  { label: 'Membres', page: 'accueil', hash: 'membres' },
  { label: 'Photos', page: 'accueil', hash: 'photos' },
  { label: 'Contactez-nous', page: 'contact' },
]
