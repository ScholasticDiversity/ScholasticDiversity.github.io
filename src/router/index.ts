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
        path: 'ancientneareast',
        name: "ancientneareast",
        component: () => import('@/views/AncientNearEast.vue'),
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
        path: 'scriptures/septuagint',
        name: "septuagint",
        component: () => import('@/views/Septuagint.vue'),
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
      {
        path: 'sriptures/q',
        name: "quran",
        component: () => import("@/views/Quran.vue"),
      },
      {
        path: 'sriptures/q/:id',
        name: "qurantranslation",
        component: () => import("@/views/QuranTranslation.vue"),
      },
      {
        path: 'sriptures/q/:id/:surah',
        name: "quransurah",
        component: () => import("@/views/QuranSurah.vue"),
        props: true,
      },
      {
        path: 'scriptures/l/:book+',
        name: "lds",
        component: () => import("@/views/LDS.vue"),
        props: true,
      },
      {
        path: "trivia",
        name: "trivia",
        component: () => import("@/views/LDS.vue")
      },
      {
        path: "trivia/bible_test",
        name: "bible_test",
        component: () => import("@/views/BibleTest.vue")
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
