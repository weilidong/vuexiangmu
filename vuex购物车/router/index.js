import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
const router=new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[{
        path:'/home',
        beforeEnter:(to,from,next)=>{
              if(!localStorage.getItem('loken')){
                  next('/login')
              }else{
                  next()
              }
        },
        component:()=>import('../views/Home.vue')
      },{
        path:'/login',
        component:()=>import('../views/Login.vue')
      },{
          path:'/',
          redirect:'/home'
      },{
        path:'/detail/:id',
        name:'detail',
        component:()=>import('../views/Detail.vue')
      }]
})

export default router