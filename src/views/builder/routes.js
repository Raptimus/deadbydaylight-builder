import BuilderPage from './BuilderPage.vue'
import { route as killerRoute } from './killer/routes'

export const BUILDER_ROUTE = '/builder'

// export const SURVIVORS_BUILDER_ROUTE = BUILDER_ROUTE + '/survivors'
// export const SURVIVOR_BUILDER_ROUTE = SURVIVOR_BUILDER_ROUTE + '/:id'

// Move to survivor folder
// const survivorRoute = [
//   {
//     path: SURVIVORS_BUILDER_ROUTE,
//     component: SurvivorsBuilderPage
//   },
//   {
//     path: SURVIVOR_BUILDER_ROUTE,
//     component: SurvivorBuilderPage
//   }
// ]

export const route = [
  {
    path: BUILDER_ROUTE,
    component: BuilderPage
  },
  ...killerRoute
]
