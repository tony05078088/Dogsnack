/* eslint-disable */
import Signin from "@/components/auth/signin.vue";
import Signup from "@/components/auth/signup.vue";
import HelpCenter from "@/components/CustomerCare/HelpCenter.vue";
import Orderstatus from "@/components/CustomerCare/OrderStatus.vue";
import Shippingpolicy from "@/components/CustomerCare/ShippingPolicy.vue";
import TermOfUse from "@/components/CustomerCare/TermOfUse.vue";
import store from "@/store/index.js";
import Vue from "vue";
import VueRouter from "vue-router";
import CustomerCare from "../components/CustomerCare/CustomerCare.vue";
import Ingredient from "../components/Ingredients/Ingredients.vue";
import CommentPage from "../components/Pages/CommentsPage.vue";
import Portfolio from "../components/Portfolio/Portfolio.vue";
import Introduction from "../views/About.vue";
import Home from "../views/Home.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Border Collie" }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Introduction,
    // () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    meta: { title: "About" }
  },
  {
    path: "/ingredient",
    name: "Ingredient",
    component: Ingredient,
    meta: { title: "Ingredient" }
  },
  {
    path: "/comment/:id",
    name: "CommentPage",
    component: CommentPage,
    props: true,
    meta: { title: "Comment" }
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
    meta: { title: "Portfolio" }
  },
  {
    path: "/customercare",
    name: "customercare",
    component: CustomerCare,
    meta: { title: "CustomerCare" }
  },
  {
    path: "/termofuse",
    name: "termofuse",
    component: TermOfUse,
    meta: { title: "TermOfUse" }
  },
  {
    path: "/orderstatus",
    name: "orderstatus",
    component: Orderstatus,
    beforeEnter(to, from, next) {
      if (store.state.idToken) {
        next("/portfolio");
      } else {
        next("/signin");
      }
    },
    meta: { title: "Orderstatus" }
  },
  {
    path: "/shippingpolicy",
    name: "shippingpolicy",
    component: Shippingpolicy,
    meta: { title: "ShoppingPolicy" }
  },
  {
    path: "/helpcenter",
    name: "helpcenter",
    component: HelpCenter,
    meta: { title: "HelpCenter" }
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
    meta: { title: "Signup Page" }
  },
  {
    path: "/signin",
    name: "signin",
    component: Signin,
    meta: { title: "Signin Page" },
    beforeEach(to, from, next) {
      if (store.state.idToken) {
        next("/ingredient");
      }
    }
    //  beforeEnter(to, from, next) {
    //   if ( store.state.idToken ) {
    //     next({ name: '' })
    //   } else  {
    //    next()
    //   }
    //  }
  }
];

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
