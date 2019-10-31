import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from '../pages/manager/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'manager',
    component: Manager,
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
