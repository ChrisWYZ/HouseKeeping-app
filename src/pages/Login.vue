<template>
  <div class="login">
    <div class="header">
      <div class="logo">jz</div>
      <div class="title">
        家政服务平台-顾客端
      </div>
    </div>
    <div class="login-content">
      <van-cell-group>
        <van-field v-model="form.username" placeholder="请输入用户名" required  label="用户名"/>
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="form.password" type="password" placeholder="请输入密码" required label="密码"/>
      </van-cell-group>
    </div>
    <div class="login-submit">
      <van-button size="default" round style="width:80%" @click="loginHandler">登录</van-button>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return {
      form:{
        type:"customer",
      }
    }
  },
  created(){
  },
  methods:{
    ...mapActions('app',['login']),
    loginHandler(){
      this.login(this.form).then(() =>{
        this.$router.push('./manager/home')
      })
    }
  }
}
</script>
<style scoped>
.login-content {
  margin-bottom: 1em;
}
.login-submit {
  text-align: center;
}
.header {
  height: 140px;
  padding: 50px;
  color: #ffffff;
  background-color: lightblue;
  text-align: center
}
.header .logo {
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  border: 1px solid #efefef;
  margin: 0 auto;
  color:#efefef;
  font-weight: bold;
  margin-bottom: 1em;
  font-size: 1.5em
}
.header .title {
  font-size: 24px;
}
</style>