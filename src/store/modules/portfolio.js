const state = {
  funds: 10000,
  ingredients: []
}

const mutations = {
  'BUY_STOCK' (state, { ingredientId, quantity, ingredientPrice }) {
    const record = state.ingredients.find(element => element.id === ingredientId)
    if (record) {
      record.quantity += quantity
    } else {
      state.ingredients.push({
        id: ingredientId,
        quantity: quantity
      })
    }
    state.funds -= ingredientPrice * quantity
  },
  'SET_PORTFOLIO' (state, portfolio) {
    console.log(portfolio)
    state.funds = portfolio.funds
    state.ingredients = portfolio.ingredientPortfolio ? portfolio.ingredientPortfolio : []
  },
  'SELL_STOCK' (state, { ingredientId, quantity, ingredientPrice }) {
    const record = state.ingredients.find(element => element.id === ingredientId)
    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      state.ingredients.splice(state.ingredients.indexOf(record), 1)
    }
    state.funds += ingredientPrice * quantity
  }
}
const actions = {
  DeleteStock ({ commit }, order) {
    commit('SELL_STOCK', order)
  }
}

const getters = {
  ingredientPortfolio (state, getters) {
    return state.ingredients.map(ingredient => {
      const record = getters.ingredients.find(element => element.id === ingredient.id)
      return {
        id: ingredient.id,
        quantity: ingredient.quantity,
        name: record.name,
        price: record.price,
        listprice: record.listprice,
        src: record.src
      }
    })
  },
  funds (state) {
    return state.funds
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
