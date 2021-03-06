import {get,post,post_obj_array} from '../http/axios';

export default {
  namespaced:true,
  state:{
    orders:[],
    orderZF:[],
    orderPD:[],
    orderFW:[],
    orderQD:[],
    orderWC:[],
    visible:false,
  },
  getters:{
    orderSize(state){
      return state.orders.length;
    },
    orderOrder:(state)=>{
      return function(flag){
        state.orders.sort((a,b)=>{
          if(a[flag] > b[flag]){
            return -1;
          } else {
            return 1;
          }
        })
        return state.orders;
      }
    }
  },
  mutations:{
    showModal(state){
      state.visible = true;
    },
    closeModal(state){
      state.visible = false;
    },
    //获取所有的订单信息
    refreshOrders(state,orders){
      state.orders = orders;
    },
    //筛选状态，并分别放入数组中
    unPay(state,orderZF){
    let a=orderZF.filter((item) => {
            return item.status ==="未付款"
        })
        state.orderZF=a;
    },
    unSend(state,orderPD){
      let b=orderPD.filter((item) => {
            return item.status ==="待派单"
        })
        state.orderPD=b;
    },
    unServe(state,orderFW){
      let c=orderFW.filter((item) => {
            return item.status ==="待服务"
        })
        state.orderFW=c;
    },
    unConfirm(state,orderQD){
      let d=orderQD.filter((item) => {
            return item.status ==="待确定"
        })
        state.orderQD=d;
    },
    compelted(state,orderWC){
      let e=orderWC.filter((item) => {
            return item.status ==="已完成"
        })
        state.orderWC=e;
    },
    unOrder(state,orderJD){
      let f=orderJD.filter((item) => {
            return item.status ==="待接单"
        })
        state.orderJD=f;
    }
  },
  actions:{
    async deleteOrderById(context,id){
      let response = await get("/order/deleteById?id="+id);
      context.dispatch("findAllOrders");
      return response;
    },
    async findAllOrders(context,id){
      // 1. ajax查询
      let response = await get("/order/query?customerId="+id);
      // 2. 将查询结果更新到state中
      context.commit("refreshOrders",response.data);
      context.commit("unSend",response.data);
      context.commit("unServe",response.data);
      context.commit("unPay",response.data);
      context.commit("unConfirm",response.data);
      context.commit("compelted",response.data);
      context.commit("unOrder",response.data);


    },
    // 保存订单信息
    async saveOrder({commit,rootState}){
      // 1. 组合数据
      let data = {
        customerId:rootState.app.info.id,
        addressId:rootState.address.addresses[0].id,
        orderLines:Array.from(rootState.shopcar.orderLines.values())
      }
      // 2. 调用后台接口完成保存
      let response = await post_obj_array('/order/save',data)
      // 3. 清空购物车（order -> shopcar）
      commit('shopcar/clearShopCar',null,{root:true})

      return response;
    },    
    
  }
}