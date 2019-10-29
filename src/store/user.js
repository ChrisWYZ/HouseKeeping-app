// import {get,post,post_array} from '../http/axios';

// export default {
//   namespaced:true,
//   state:{
//     users:[],
//     token:{
//         "password": "string",
//         "token": "string",
//         "username": "string"
//     },
//     title:"添加顾客信息"
//   },
//   getters:{

//   },
//   mutations:{
    
//     refreshUsers(state,users){
//       state.users = users;
//     },
//     setTitle(state,title){
//       state.title = title;
//     }
//   },
//   actions:{
//     // payload 顾客信息
//     async saveOrUpdateUser({commit,dispatch},payload){
//       // 1. 保存或更新
//       let response = await post("",payload)
//       // 2. 刷新页面
//       dispatch("findAllUsers");
//       // 4. 提示
//       return response;
//     }
//   }
// }