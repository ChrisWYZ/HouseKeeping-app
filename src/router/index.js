import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from '../pages/manager/Layout.vue'
import store from '../store'
import { Toast } from 'vant'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'manager',
    component: Manager,
    beforeEnter: (to, from, next) => {  //属于路由自己的拦截器
      let token = localStorage.getItem("token");
      if(token){
        // 查询info
        store.dispatch('app/info',token)
        .then(()=>{
          // 当获取万用户信息之后才允许跳转
          next();
        })
      } else {
        Toast("token失效")
        // 跳转到登录
        next({path:'/login'})
      }
    },
    children:[{
      path:"home",
      component:() => import('../pages/manager/Home.vue')
    },{
      path:"order",
      component:() => import('../pages/manager/Order.vue')
    },{
      path:"user",
      component:() => import('../pages/manager/User.vue')
    },{
      path:"help",
      component:() => import('../pages/manager/Help.vue')
    },{
      path:"address",
      component:() => import('../pages/manager/Address.vue')
    },{
      path:"addAddress",
      component:() => import('../pages/manager/AddAddress.vue')
    },{
      path:"categoryList",
      component:() => import('../pages/manager/CategoryList.vue')
    },{
      path:"confirmOrder",
      component:() => import('../pages/manager/ConfirmOrder.vue')
    },
      ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
