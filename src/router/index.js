/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Introduction from '../views/About.vue'
import Ingredient from '../components/Ingredients/Ingredients.vue'
import Portfolio from '../components/Portfolio/Portfolio.vue'
import CustomerCare from '../components/CustomerCare/CustomerCare.vue'
import TermOfUse from '@/components/CustomerCare/TermOfUse.vue'
import Orderstatus from '@/components/CustomerCare/OrderStatus.vue'
import Shippingpolicy from '@/components/CustomerCare/ShippingPolicy.vue'
import HelpCenter from '@/components/CustomerCare/HelpCenter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Introduction
    // () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ingredient',
    name: 'Ingredient',
    component: Ingredient
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/customercare',
    name: 'customercare',
    component: CustomerCare
  },
  {
    path: '/termofuse',
    name: 'termofuse',
    component: TermOfUse
  },
  {
    path: '/orderstatus',
    name: 'orderstatus',
    component: Orderstatus
  },
  {
    path: '/shippingpolicy',
    name: 'shippingpolicy',
    component: Shippingpolicy
  },
  {
    path: '/helpcenter',
    name: 'helpcenter',
    component: HelpCenter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
