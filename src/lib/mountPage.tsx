import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/global.css'
import '../styles/layout.css'
import '../styles/animations.css'

// Point de départ commun à toutes les pages : styles globaux + rendu React dans #root.
export function mountPage(page: ReactNode) {
  createRoot(document.getElementById('root')!).render(<StrictMode>{page}</StrictMode>)
}
