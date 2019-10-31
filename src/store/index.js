import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import category from './category'
import product from './product'
import address from './address'
import order from './order'
import categoryList from './categoryList'
import app from './app'


export default new Vuex.Store({
  modules:{
    category,
    product,
    address,
    order,
    categoryList,
    app
  }
})
