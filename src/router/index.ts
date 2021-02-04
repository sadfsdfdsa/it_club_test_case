import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

/**
 * TODO
 * validate route for success before entering - redirect if payment didn't happen
 */

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MainPageView',
    component: () => import('../views/MainPageView.vue')
  },
  {
    path: '/success',
    name: 'CompletedPayment',
    component: () => import('../views/CompletedPayment.vue')
  },
  {
    path: '/pick/:type',
    name: 'ItemsPickerView',
    component: () => import('../views/ItemsPickerView.vue')
  },
  {
    path: '/create/contact',
    name: 'CreateContactView',
    component: () => import('../views/CreateContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
