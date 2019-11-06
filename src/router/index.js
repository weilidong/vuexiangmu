import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('../views/Login/Login.vue'),
    meta:{title:'圈子登录',flag:false}
  },
  {
    path: '/register',
    component: () => import('../views/register/Register.vue'),
    meta:{title:'圈子注册',flag:true}
  },
  {
    path: '/home',
    component: () => import('../views/home/Home.vue'),
    children: [{
      path: 'circle',
      component: () => import('../views/home/circle/Circle.vue')
    },
    {
      path: 'my',
      component: () => import('../views/home/my/My.vue')
    }]
  },
  {
    path: '/',
    redirect: '/login'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
