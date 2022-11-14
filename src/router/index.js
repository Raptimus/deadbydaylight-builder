import { createRouter, createWebHistory } from 'vue-router'
import { HOME_ROUTE, route as homeRoute } from '@/views/home/routes'
import { BUILDER_ROUTE, route as builderRoute } from '@/views/builder/routes'
import { KILLER_ROUTE, route as killerRoute } from '@/views/killer/routes'

export const ROUTES = {
  HOME_ROUTE,
  BUILDER_ROUTE,
  KILLER_ROUTE
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [homeRoute, builderRoute, killerRoute]
})

export default router
