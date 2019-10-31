import {get,post} from '../http/axios'
export default {
  namespaced:true,
  state:{
    addresses:[]
  },
  mutations:{
    refreshAddress(state,addresses){
      state.addresses = addresses;
    }
  },
  actions:{
    // async findAddressByCustomerId(context,id){
    //   let response = await get("/address/findByCustomerId?id="+id);
    //   context.commit("refreshAddress",response.data)
    // },
    async findAddressByCustomerId(context,id){
      let response = await get('/address/findByCustomerId?id='+id)
      context.commit('refreshAddress',response.data)
      console.log(response)
    },
    async saveOrUpdateAddress(context,payload){
      let response = await post('/address/saveOrUpdate',payload)
      context.dispatch('findAllAddresses')
      return response;
    }

  }
}