// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'contextualtheologies',
        name: "contextualtheologies",
        component: () => import('@/views/ContextualTheology.vue'),
      },
      {
        path: 'theology',
        name: "theology",
        component: () => import('@/views/Theology.vue'),
      },
      {
        path: 'judaism',
        name: "judaism",
        component: () => import('@/views/Judaism.vue'),
      },
      {
        path: 'religiousliteracy',
        name: "religiousliteracy",
        component: () => import('@/views/ReligiousLiteracy.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
