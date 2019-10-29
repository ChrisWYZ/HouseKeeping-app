import {get,post,post_array} from '../http/axios';

export default {
  namespaced:true,
  state:{
    unPayOrder:[],
    orders:[],
    orderss:[],
    ordersss:[],
    orderssss:[],
    ordermes:[],
    visible:false,
    title:"添加顾客信息"
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
    // findOrdermes(state,order){
    //   state.orders = orders;
    // },
    unPay(state,orderss){
   let a=orderss.filter((item) => {
            return item.status ==="未付款"
        })
        state.orderss=a;
    },
    unSend(state,ordersss){
      let b=ordersss.filter((item) => {
            return item.status ==="待派单"
        })
        state.ordersss=b;
    },
    unServe(state,orderssss){
      let c=orderssss.filter((item) => {
            return item.status ==="未服务"
        })
        state.orderssss=c;
    },
    setTitle(state,title){
      state.title = title;
    }
  },
  actions:{
    async batchDeleteOrder(context,ids){
      // 1. 批量删除
      let response = await post_array("/order/batchDelete",{ids})
      // 2. 分发
      context.dispatch("findAllOrders");
      // 3. 返回结果
      return response;
    },
    async deleteOrderById(context,id){
      let response = await get("/order/deleteById?id="+id);
      context.dispatch("findAllOrders");
      return response;
    },
    async findAllOrders(context){
      // 1. ajax查询
      let response = await get("/order/findAll");
      // 2. 将查询结果更新到state中
      context.commit("refreshOrders",response.data);
    },
    async findOrdermes(context,a){
      // 1. ajax查询
      let response = await get("/order/queryBasic",{customerId,waiterId});
      // 2. 将查询结果更新到state中
      context.commit("refreshOrders",response.data);
    },
    async unPayOrders(context){
        // 1. ajax查询
        let response = await get("/order/findAll");
        // 2. 将查询结果更新到state中
        context.commit("unPay",response.data);
      },
      async unSendOrders(context){
        // 1. ajax查询
        let response = await get("/order/findAll");
        // 2. 将查询结果更新到state中
        context.commit("unSend",response.data);
      },
      async unServeOrders(context){
        // 1. ajax查询
        let response = await get("/order/findAll");
        // 2. 将查询结果更新到state中
        context.commit("unServe",response.data);
      },
    // payload 顾客信息
    async saveOrUpdateOrder({commit,dispatch},payload){
      // 1. 保存或更新
      // console.log(payload)
      let response = await post("/order/saveOrUpdate",payload)
      // 2. 刷新页面
      dispatch("findAllOrders");
      // 3. 关闭模态框
      commit("closeModal");
      // 4. 提示
      return response;
    }
  }
}