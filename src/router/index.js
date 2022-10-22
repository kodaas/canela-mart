import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Intro from '../views/Intro.vue'

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
    }
  ]
})

export default router
