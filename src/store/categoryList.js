import {get} from '../http/axios'
export default {
    namespaced:true,
    state:{
        products:[]
    },
    getters:{
        // getProductsByCategoryId(state){
        //     return (categoryId)=>{
        //         return state.products.filter((item)=>{
        //             return item.categoryId === categoryId
        //         })
        //     }
        // }
    },
    mutations:{
        
    },
    actions:{
    //     findProductsByCategoryId({commit},id){
    //         get("/product/findByCategoryId?id="+id)
    //         .then((result)=>{
    //         // 为product添加一个number属性
    //         result.data.forEach((item)=>{
    //             item.number = 0;
    //         })
    //         // 将查询到的数据更新到state中
    //         commit("resetProducts",result.data)
    //         })
    //     }
    }
}