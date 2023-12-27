import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backimage: null,
  },
  getters: {
  },
  mutations: {
    setImage(state, data) {
      state.backimage = data;
    },
  },
  actions: {
  },
  modules: {
  }
})
