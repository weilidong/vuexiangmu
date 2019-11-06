import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    list: [],
    checkAll:false
  },
  getters: {
    priceReduce(state){
     return state.count = state.list.reduce((p, n) => {
       console.log(n.flag)
          if(n.flag){
            p += n.num * n.price
          }
        return p
      }, 0)
    }
  },
  mutations: {
    add(state, index) {
      state.list[index].num++
   
    },
    del(state, index) {
      if (state.list[index].num > 0) {
        state.list[index].num--
      }
    },
    setlist(state, list) {
      state.list = list
    },
    changeAll(state){
      state.checkAll=!state.checkAll
      state.list.forEach(item=>{
      
         item.flag=state.checkAll
         console.log(item.flag)
      })
     
  
    }
  },
  actions: {
    getlist(context) {
      axios.get('/getlist').then(res => {
        context.commit('setlist', res.data)
      })
    }
  },
  modules: {
  }
})
