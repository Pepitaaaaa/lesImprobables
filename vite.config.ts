import { readdirSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type HtmlTagDescriptor, type Plugin } from 'vite'

const projectDir = import.meta.dirname
const pagesDir = resolve(projectDir, 'src/pages')
const fontsDir = resolve(projectDir, 'src/assets/fonts')

// Chaque index.html sous src/pages/ est une page : src/pages/contact/index.html -> /contact/
function findPages(dir: string): Record<string, string> {
  const found: Record<string, string> = {}
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) Object.assign(found, findPages(path))
    else if (entry.name === 'index.html') found[relative(pagesDir, dir).replaceAll('\\', '/') || 'accueil'] = path
  }
  return found
}

// Balises communes ajoutées dans le <head> de toutes les pages, pour ne pas les répéter dans chaque index.html.
function sharedHead(): Plugin {
  let base = '/'
  return {
    name: 'shared-head',
    configResolved(config) {
      base = config.base
    },
    transformIndexHtml: {
      // « pre » : Vite traite ensuite ces balises comme le reste du HTML (polices renommées avec leur empreinte).
      order: 'pre',
      handler(_html, ctx) {
        const toFont = (file: string) => relative(dirname(ctx.filename), join(fontsDir, file)).replaceAll('\\', '/')
        const tags: HtmlTagDescriptor[] = [
          { tag: 'meta', attrs: { name: 'theme-color', content: '#f2f8fe' } },
          { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '64x64', href: `${base}favicon.png?v=3` } },
          { tag: 'link', attrs: { rel: 'apple-touch-icon', href: `${base}apple-touch-icon.png` } },
          ...['inter-latin.woff2', 'playfair-display-latin.woff2'].map((file) => ({
            tag: 'link',
            attrs: { rel: 'preload', href: toFont(file), as: 'font', type: 'font/woff2', crossorigin: '' },
          })),
          // Précharge la page visée dès le survol d'un lien : navigation instantanée (Chrome, Edge).
          {
            tag: 'script',
            attrs: { type: 'speculationrules' },
            children: JSON.stringify({ prerender: [{ where: { href_matches: '/*' }, eagerness: 'moderate' }] }),
          },
        ]
        return tags.map((tag) => ({ ...tag, injectTo: 'head' as const }))
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  root: pagesDir,
  publicDir: resolve(projectDir, 'public'),
  envDir: projectDir,
  plugins: [react(), sharedHead()],
  build: {
    outDir: resolve(projectDir, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: findPages(pagesDir),
    },
  },
})
