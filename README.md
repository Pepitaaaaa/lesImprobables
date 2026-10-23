# Les Impro-Bables — site web

Site de l'association Les Impro-Bables, construit avec React, TypeScript et Vite.
Le site est 100 % statique : `npm run build` produit un dossier `dist/` à déposer chez n'importe quel hébergeur.

## Commandes

| Commande | Rôle |
|---|---|
| `npm install` | Installe les dépendances (une seule fois) |
| `npm run dev` | Lance le site en local avec rechargement automatique |
| `npm run build` | Vérifie les types puis génère le site final dans `dist/` |
| `npm run preview` | Affiche le site final (`dist/`) en local, à la vitesse réelle |
| `npm run lint` | Vérifie la qualité du code |

## Organisation

```
public/                     Fichiers copiés tels quels (favicon, icône iPhone)
src/
├── pages/                  UNE PAGE = UN DOSSIER (le dossier donne l'URL)
│   ├── index.html          → /            (accueil)
│   ├── main.tsx
│   ├── HomePage.tsx
│   ├── HomePage.css
│   └── contact/            → /contact/
│       ├── index.html      titre et description de la page
│       ├── main.tsx        point d'entrée (2 lignes)
│       ├── ContactPage.tsx contenu de la page
│       └── ContactPage.css styles propres à la page
├── components/
│   ├── layout/             En-tête et pied de page, communs à toutes les pages
│   └── ui/                 Petits éléments réutilisables (étoiles, notes, vagues, icônes)
├── config/
│   ├── navigation.ts       Liste des pages et menu principal
│   └── formspark.ts        Identifiant du formulaire de contact
├── data/                   Contenus (membres…)
├── lib/                    Fonctions utilitaires (démarrage d'une page, liens)
├── styles/
│   ├── global.css          Couleurs de la charte, polices, réglages de base
│   ├── layout.css          Styles partagés : en-tête, bandeau, titres, pied de page
│   └── fonts.css           Déclaration des polices hébergées sur le site
└── assets/                 Polices et images traitées par Vite
docs/design/                Maquettes et logos sources (non publiés sur le site)
```

## Ajouter une page

Exemple avec une page « Concerts » accessible à l'adresse `/concerts/` :

1. Créer le dossier `src/pages/concerts/` en copiant `src/pages/contact/`.
2. Dans `index.html` : changer le `<title>` et la `description`.
3. Renommer `ContactPage.tsx` / `.css` en `ConcertsPage.tsx` / `.css` et adapter le contenu
   (garder `<SiteHeader current="concerts" />` et `<SiteFooter />`).
4. Dans `main.tsx` : importer `ConcertsPage`.
5. Dans `src/config/navigation.ts` : ajouter `concerts: { path: 'concerts/' }` dans `pages`,
   et une entrée dans `mainNav` si la page doit apparaître dans le menu.

Vite détecte automatiquement chaque `index.html` placé dans `src/pages/` : rien d'autre à configurer.
Les balises communes (favicon, couleur du thème, préchargement des polices et des pages) sont ajoutées
automatiquement dans chaque page par `vite.config.ts`.

## Charte graphique

Les couleurs sont des variables CSS définies dans `src/styles/global.css` :

| Variable | Couleur | Usage |
|---|---|---|
| `--deep` | `#043890` | Bleu profond : titres, menu, pied de page |
| `--sky` | `#38b6ff` | Bleu ciel : bouton, étoiles, décors |
| `--mid` | `#0a6fc2` | Bleu moyen : textes secondaires, liens actifs |
| `--paper` | `#f2f8fe` | Fond glacier de l'en-tête |

Polices : Playfair Display (titres), Dancing Script (phrases manuscrites), Inter (texte).

## Formulaire de contact

Les messages sont envoyés par [Formspark](https://formspark.io) (données hébergées dans l'UE).
Renseigner l'identifiant du formulaire dans `src/config/formspark.ts`.
