import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    num:0
  },
  getters:{
    count(state){
      return state.list
    }
  },
  mutations: {
    addzan(state,id){
 
     state.list[id].num++
     console.log(state.list[id])
    }
  },
  actions: {
    getlist(context){
      axios.get('/getlist').then(res=>{
        context.state.list=res.data
      })
    }
  },
  modules: {
  }
})
