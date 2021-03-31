import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App.vue'
import BaseButton from './components/UI/BaseButton'
// UI
import BaseCard from './components/UI/BaseCard'
import router from './router'
import store from './store'

Vue.component('BaseCard', BaseCard)
Vue.component('BaseButton', BaseButton)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
axios.defaults.baseURL = 'https://dogsnack-be64d.firebaseio.com/'
Vue.filter('currency', value => {
  return '$' + value.toLocaleString()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
