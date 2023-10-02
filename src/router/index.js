import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/auth/Login.vue'
import { authGuard } from "@/_helpers/auth-guard";

import * as App from '@/views/app'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/app',
    name: 'app',
    component: App.AppLayout,
    children: [
      { path: "dashboard", component: App.Dashboard },
      { path: "events/new", component: App.EventNew },
      { path: "events/:id/edit", component: App.EventEdit }
      ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched[0].name == 'app'){
    authGuard()
  }
  next();
})

export default router
