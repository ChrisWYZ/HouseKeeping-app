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
    async findAddressByCustomerId(context){
      let id = context.rootState.app.info.id
      let response = await get('/address/findByCustomerId',{id})
      context.commit('refreshAddress',response.data)
      // console.log(response)
    },
    async saveOrUpdateAddress(context,payload){
      let customerId = context.rootState.app.info.id;
      let {id,province,city,area,adds:address,telephone} = payload;
      let response = await post('/address/saveOrUpdate',{id,customerId,province,city,area,address,telephone})
      return response;
    },
    //删除
    async deleteAddress(context,id){
      let response = await get('/address/deleteById',{id});
      return response;
    }
  }
}