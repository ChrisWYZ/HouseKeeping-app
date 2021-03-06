import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from '../pages/manager/Layout.vue'
import store from '../store'
import { Toast } from 'vant'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login'    
  },
  {
    path: '/manager',
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
      path:"/manager/home",
      component:() => import('../pages/manager/Home.vue')
    },{
      path:"/manager/order",
      component:() => import('../pages/manager/Order.vue')
    },{
      path:"/manager/user",
      component:() => import('../pages/manager/User.vue')
    },{
      path:"/manager/help",
      component:() => import('../pages/manager/Help.vue')
    },{
      path:"/manager/address",
      component:() => import('../pages/manager/Address.vue')
    },{
      path:"/manager/addAddress",
      component:() => import('../pages/manager/AddAddress.vue')
    },{
      path:"/manager/categoryList",
      component:() => import('../pages/manager/CategoryList.vue')
    },{
      path:"/manager/confirmOrder",
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
