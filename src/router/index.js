import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/s01',
    name: 's01',
    component: () => import('@/views/sample01')
  },
  {
    path: '/s02',
    name: 's02',
    component: () => import('@/views/sample02')
  },
  {
    path: '/s03',
    name: 's03',
    component: () => import('@/views/sample03')
  }
]

const router = new VueRouter({
  routes
})

export default router
