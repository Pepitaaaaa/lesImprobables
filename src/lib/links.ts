import { pages, type PageId } from '../config/navigation'

// Lien relatif d'une page vers une autre : fonctionne à la racine d'un domaine
// comme dans un sous-dossier (GitHub Pages), sans configuration.
export function pageHref(from: PageId, to: PageId, hash?: string) {
  const depth = pages[from].path.split('/').filter(Boolean).length
  const root = depth === 0 ? './' : '../'.repeat(depth)
  return `${root}${pages[to].path}${hash ? `#${hash}` : ''}`
}
