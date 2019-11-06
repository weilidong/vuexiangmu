import Vue from 'vue'
import Vuex from 'vuex'
import store from './store/index'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router/index';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Vuex)
Vue.config.productionTip = false
window.vm=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
