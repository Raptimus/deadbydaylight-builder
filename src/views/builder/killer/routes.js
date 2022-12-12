import KillerBuilderPage from './KillerBuilderPage.vue'

export const KILLERS_BUILDER_ROUTE = '/killers'
export const KILLER_BUILDER_ROUTE = KILLERS_BUILDER_ROUTE + '/:id'

export const route = [
  {
    path: KILLERS_BUILDER_ROUTE
    // component: KillerBuilderPage
  },
  {
    path: KILLER_BUILDER_ROUTE,
    name: 'killer',
    component: KillerBuilderPage
  }
]
