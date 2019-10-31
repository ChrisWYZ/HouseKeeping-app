<template>
  <div class="order">
    <router-view></router-view>
    <div>
      <!-- <router-link to="/home">首页</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/user">我的</router-link> -->
      <van-tabbar v-model="active" @change="tabChangeHandler">
        <van-tabbar-item name="/home" icon="star-o">首页</van-tabbar-item>
        <van-tabbar-item name="/order" icon="search">订单</van-tabbar-item>
        <van-tabbar-item name="/user" icon="user-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data(){
    return {
      active:1
    }
  },
  created(){
    let token = localStorage.getItem("token");
    if(token){
      this.info(token)
    } else {
      this.$toast("请先登录")
      this.$router.push('/login')
    }
  },
  methods:{
    ...mapActions('app',['info']),
    tabChangeHandler(path){
      this.$router.push({path})
    }
  }
}
</script>