import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import flashcard from '../components/flash.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {path: '/', name: 'flashcard', component: flashcard},
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/card',
    name: 'Cards',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cards.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
