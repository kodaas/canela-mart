import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Intro from '../views/Intro.vue'
import Kyc from '../views/Kyc.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/kyc',
      name: 'kyc',
      component: Kyc
    }
  ]
})

export default router
