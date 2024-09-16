import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import myWebRouter from '@/modules/myWeb/router/index'
import financeRouter from '@/modules/finance/router/index'

const routes = [
  {
    path: '/my-web',
    ...myWebRouter
  },
  {
    path: '/finance',
    ...financeRouter
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { 
    path: '/:pathMatch(.*)*' , 
    name: 'NoPageFound',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
