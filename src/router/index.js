import { createRouter, createWebHistory } from 'vue-router'
import { route as homeRoute } from '@/views/home/routes'
import { route as builderRoute } from '@/views/builder/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [homeRoute, ...builderRoute]
})

export default router
