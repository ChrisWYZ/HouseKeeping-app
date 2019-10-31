<template>
  <div class="login">
      <div class="login-content">
        {{form}}
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
        this.$router.push('./home')
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
</style>