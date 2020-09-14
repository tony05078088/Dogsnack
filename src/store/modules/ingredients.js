import food from '../../data/food'

const state = {
  ingredients: []
}
const mutations = {
  'SET_STOCKS' (state, food) {
    state.ingredients = food
  }
}

const actions = {
  AddCart: ({ commit }, order) => {
    commit('BUY_STOCK', order)
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', food)
  }
}
// Getters 會暴露為store.getters對象,可以屬性的形式訪問
const getters = {
  ingredients: state => {
    return state.ingredients
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
