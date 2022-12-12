import { HOME_ROUTE } from '@/views/home/routes'
import { BUILDER_ROUTE } from '@/views/builder/routes'

export const links = [
  {
    icon: '/icons/home.png',
    alt: 'Home icon',
    route: HOME_ROUTE,
    label: 'Accueil'
  },
  {
    icon: '/icons/builder.png',
    alt: 'Builder icon',
    route: BUILDER_ROUTE,
    label: 'Builder'
  },
  // {
  //   route: PERKS_ROUTE,
  //   label: 'Compétences'
  // },
  {
    icon: '/icons/shrineofsecrets.png',
    alt: 'Shrine of secrets icon',
    route: BUILDER_ROUTE,
    label: 'Temple des secrets'
  },
  {
    icon: '/icons/about.png',
    alt: 'About icon',
    route: BUILDER_ROUTE,
    label: 'A propos'
  }
]
