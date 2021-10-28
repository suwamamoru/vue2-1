import Vue from 'vue'
import VueRouter from 'vue-router'
import page1 from '../views/page1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'page1',
    component: page1
  },
  {
    path: '/page2',
    name: 'page2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/page2.vue')
  },
  {
    path: '/page3',
    name: 'page3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/page3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
