<template>
<div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/ingredient">Products</router-link> |
      <router-link to="/portfolio">Shopping Cart</router-link> |
      <router-link v-if="!auth" to="/signup">Sign up</router-link> |
      <router-link v-if="!auth" to="/signin">Sign in</router-link> |
        <button @click="onLogout" class="logout" v-if="auth">Logout</button>
      <!-- <strong class="navbar-text">Funds: {{ funds | currency }}</strong> -->
   </div>
    <div class="page">
                    <router-view></router-view>
</div>
 <app-footer> </app-footer>
</div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position:relative;
  width:100%;
  min-height:100%
}

#nav {
  padding: 25px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: black;
  a {
    font-weight: bold;
    color: #999;
    &.router-link-exact-active {
      color: #fff
    }
  }
}
.navbar-text {
 color: #777;
}
.page {
  height: 100%;
  padding-top:50px;
  padding-bottom:50px;
}
app-footer {
  width: 100%;
  height:100px;/* footer的高度一定要是固定值*/
  position:absolute;
  bottom:0px;
  left:0px;
  background: #333;
}
.logout {
  background-color: transparent;
  border: none;
  font: inherit;
  color: white;
  cursor: pointer;
}
</style>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: {
    appFooter: Footer
  },
  created () {
    this.$store.dispatch('initStocks')
    this.$store.dispatch('tryAutoLogin')
  },
  computed: {
    funds () {
      return this.$store.getters.funds
    },
    auth () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
