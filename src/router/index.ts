import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/pedidos',
    name: 'pedidos',

    component: () => import(/* webpackChunkName: "pedidos" */ '../views/Pedidos.vue')
  },
  {
    path: '/sobre',
    name: 'sobre',

    component: () => import(/* webpackChunkName: "sobre" */ '../views/Sobre.vue')
  },
  {
    path: '/contato',
    name: 'contato',

    component: () => import(/* webpackChunkName: "contato" */ '../views/Contato.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
