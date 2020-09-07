import Vue from 'vue'
import Vuex from 'vuex'

import ingredients from './modules/ingredients'
import portfolio from './modules/portfolio'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ingredients,
    portfolio
  }
})
