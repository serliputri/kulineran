import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppFoods from '../views/AppFoods.vue'
import AppFoodsDetails from '../views/AppFoodsDetails.vue'
import AppCart from '../views/AppCart.vue'
import AppPesananSukses from '../views/AppPesananSukses.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/foods',
    name: 'AppFoods',
    component: AppFoods
  },

  {
    path: '/foods/:id',
    name: 'AppFoodsDetails',
    component: AppFoodsDetails
  },

  {
    path: '/cart',
    name: 'AppCart',
    component: AppCart
  },

  {
    path: '/pesanan-sukses',
    name: 'AppPesananSukses',
    component: AppPesananSukses
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
