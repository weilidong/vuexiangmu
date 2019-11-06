import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    uselist: [],
    listdata: []
  },
  getters: {

  },
  mutations: {
    adduselist(state, data) {
      state.uselist = data
    },
    setlistdata(state, data) {
      state.listdata = data
      console.log(data)
    }
  },
  actions: {
    getlist(context) {
      axios.get('/getlist').then(res => {
        context.commit('setlistdata', res.data)
      })
    }
  },
  modules: {
  }
})
