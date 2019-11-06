import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    component: () => import('../views/index.vue'),
    children: [{
      path: '/index/home',
      component: () => import('../views/home/home.vue'),
      children: [{
        path: 'look',
        name:'look',
        component: () => import('../views/home/look/look.vue'),
      }, {
        path: 'tuijian',
        name:'tuijian',
        component: () => import('../views/home/tuijian/tuijian.vue'),
      }, {
        path: 'hot',
        name:'hot',
        component: () => import('../views/home/hot/hot.vue'),
      },{
        path:'/index/home',
        redirect:'/index/home/look'
      }]
    }, {
      path: '/index/ider',
      component: () => import('../views/ider/ider.vue'),
    }, {
      path: '/index/school',
      component: () => import('../views/school/school.vue'),
    }, {
      path: '/index/msg',
      component: () => import('../views/msg/msg.vue'),
    }, {
      path: '/index/my',
      component: () => import('../views/my/my.vue')
    }]
  }, {
    path: "/",
    redirect: '/index/home'
  }, {
    path: '/detail',
    component: () => import('../views/detail/detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
