export default {
  
  state: () => ({
    name: "Buster"
  }),

  getters: {},

  mutations: {
    SET_NAME(store, payload) {
      state.name = payload
    }
  },

  actions: {
    saveName({ commit }, data) {
      commit('SET_NAME', data)
    }
  }
}