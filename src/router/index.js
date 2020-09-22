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
import Signup from '@/components/auth/signup.vue'
import Signin from '@/components/auth/signin.vue'

import store from '@/store/index.js'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title: 'Border Collie' }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Introduction,
    // () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    meta: {title: 'About' }
  },
  {
    path: '/ingredient',
    name: 'Ingredient',
    component: Ingredient,
    meta: {title: 'Ingredient' }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {title: 'Portfolio' }
  },
  {
    path: '/customercare',
    name: 'customercare',
    component: CustomerCare,
    meta: {title: 'CustomerCare' }
  },
  {
    path: '/termofuse',
    name: 'termofuse',
    component: TermOfUse,
    meta: {title: 'TermOfUse' }
  },
  {
    path: '/orderstatus',
    name: 'orderstatus',
    component: Orderstatus,
    meta: {title: 'Orderstatus' }
  },
  {
    path: '/shippingpolicy',
    name: 'shippingpolicy',
    component: Shippingpolicy,
    meta: {title: 'ShoppingPolicy' }
  },
  {
    path: '/helpcenter',
    name: 'helpcenter',
    component: HelpCenter,
    meta: {title: 'HelpCenter' }
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
    meta: {title: 'Signup Page' }  
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin,
    meta: {title: 'Signin Page' },
    // beforeEnter(to, from, next) {
    //  if (store.state.idToken) {
    //    next()
    //  } else {
    //   next('/signup')  
    //  }
    // }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
