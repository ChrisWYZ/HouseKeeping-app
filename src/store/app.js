import {get,post_json,post} from '../http/axios'
export default {
    namespaced:true,
    state:{
        token:localStorage.getItem("token"),
        info:{}
    },
    getters:{

    },
    mutations:{
        refreshToken(state,token){
            state.token = token;
        },
        refreshInfo(state,info){
            state.info = info;
        }
    },
    actions:{
        async login(context,payload){
            let response = await post_json("/user/login",payload)
            let token = response.data.token;
            //将token缓存到本地浏览器
            localStorage.setItem("token",token);
            //将token放到状态机里
            context.commit('refreshToken',token);
            await context.dispatch('info',token)
        },
        async info(context,token){
            let response = await get("/user/info",{token})
            context.commit('refreshInfo',response.data)
        },
        async logout(context){
            // 1. 请求后台退出
            await post("/user/logout");
            // 2. 移除本地缓存中的token
            localStorage.removeItem("token");
            // 3. 移除状态机中的token以及info
            context.commit("refreshInfo",null);
            context.commit("refreshToken","");
          }
    }
}