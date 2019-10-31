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
      // console.log(response)
    },
    async saveOrUpdateAddress(context,payload){
      let customerId = context.rootState.app.info.id;
      let {province,city,area,address,telephone} = payload;
      let response = await post('/address/saveOrUpdate',{customerId,province,city,area,address,telephone})
      context.dispatch('findAddressByCustomerId')
      return response;
    }

  }
}