import { createRouter, createWebHistory } from 'vue-router'
import { HOME_ROUTE, route as homeRoute } from '@/views/home/routes'
import { BUILDER_ROUTE, route as builderRoute } from '@/views/builder/routes'

export const ROUTES = {
  HOME_ROUTE,
  BUILDER_ROUTE
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [homeRoute, builderRoute]
})

export default router
