<template>
  <div class="login">
    <router-view></router-view>
    <div>
      <van-row class="content">
        <van-col span="6"></van-col>
        <van-col span="12" class="cont">请先登录账号</van-col>
        <van-col span="6"></van-col>
      </van-row>
      <van-row>
        <van-col span="4"></van-col>
        <van-col span="16">
          <div id="login_message">
            <van-cell-group>
              <van-field
                
                required
                clearable
                label="用户名"
                right-icon="question-o"
                placeholder="请输入用户名"
                @click-right-icon="$toast('question')"
              />

              <van-field
                
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
              />
              <van-button type="primary" url="/home">跳转</van-button>
            </van-cell-group>
          </div>
        </van-col>
        <van-col span="4"></van-col>
      </van-row>
      <van-tabbar v-model="active" @change="tabChangeHandler">
        <van-tabbar-item name="/home" icon="star-o">首页</van-tabbar-item>
        <van-tabbar-item name="/order" icon="search">订单</van-tabbar-item>
        <van-tabbar-item name="/user" icon="user-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return {
      active:0
    }
  },
  created(){
  },
  methods:{
    tabChangeHandler(path){
      this.$router.push({path})
    }
  }
}
</script>
<style scoped>
.content{
  height:50px;
  line-height: 50px;
}
.cont{
  background-color: aquamarine;
  text-align: center;
}
#login_message{
  margin-top: 3em;
  padding: 1em;
  background-color: black;
}
</style>