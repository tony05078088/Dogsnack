import Vue from 'vue'
import Vuex from 'vuex'

import ingredients from './modules/ingredients'
import portfolio from './modules/portfolio'
import axios from 'axios'
const url = 'https://dog.ceo/api/breeds/image/random'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dogpic: null
  },
  mutations: {
    setDogImg (state, response) {
      state.dogpic = response.data.message
    }
  },
  actions: {
    getDogImg ({ commit }, response) {
      axios
        .get(`${url}`)
        .then(response => {
          console.log(response)
          commit('setDogImg', response)
        })
        .catch(err => { console.log(err) })
    }
  },
  modules: {
    ingredients,
    portfolio
  }
})
