import {get,post,post_array} from '../http/axios';

export default {
  namespaced:true,
  state:{
    products:[],
  },
  getters:{
    
  },
  mutations:{
    refreshProducts(state,products){
      state.products = products;
    }
  },
  actions:{
    async queryProduct({commit},payload){
      let response = await post('/product/query',payload)
      commit('refreshProducts',response.data.list);
    }
  }
}