// Membres affichés sur la page d'accueil.
export type Member = { name: string; instrument: string; image: string; alt: string }

export const members: Member[] = [
  {
    name: 'Pierre Le Gall',
    instrument: 'Accordéoniste',
    image:
      'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=85',
    alt: 'Musicien jouant de la guitare',
  },
  {
    name: 'Maëlle Kerouac’h',
    instrument: 'Violoniste',
    image:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=85',
    alt: 'Musicienne chantant dans un micro',
  },
  {
    name: 'Yannick Le Breton',
    instrument: 'Bombardier',
    image:
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=85',
    alt: 'Musicien sur scène',
  },
  {
    name: 'Lucas Morvan',
    instrument: 'Guitariste',
    image:
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=85',
    alt: 'Concert en plein air',
  },
  {
    name: 'Élise Danion',
    instrument: 'Percussionniste',
    image:
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800&q=85',
    alt: 'Public réuni autour de la musique',
  },
  {
    name: 'Hugo Kervadec',
    instrument: 'Soubassophoniste',
    image:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=85',
    alt: 'Musicien dans un studio de musique',
  },
]
