// Composables
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<any> = [
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
        path: "tempuscalendar",
        name: "tempuscalendar",
        component: () => import("@/views/TempusCalendar.vue"),
      },
      {
        path: 'blog',
        name: 'blog',
        component: () => import("@/views/Blog.vue"),
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
        path: 'christianity',
        name: "christianity",
        component: () => import('@/views/Christianity.vue'),
      },
      {
        path: 'religiousliteracy',
        name: "religiousliteracy",
        component: () => import('@/views/ReligiousLiteracy.vue'),
      },
      {
        path: 'scriptures',
        name: "scriptures",
        component: () => import('@/views/Scriptures.vue'),
      },
      {
        path: 'sriptures/j',
        name: "jewishscriptures",
        component: () => import("@/views/Tanakh.vue"),
        props: { categories: [] },
      },
      {
        path: "scriptures/j/:categories+",
        name: "sefaria",
        component: () => import("@/views/Tanakh.vue"),
        props: true,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0 }
    }
  },
})


/*
router.afterEach((to, from) => {
  console.log(window.location.href);
  sefaria.link({ dynamic: true, mode: "popup-click", contentLang: "english", interfaceLang: "english", });
})
*/


export default router
