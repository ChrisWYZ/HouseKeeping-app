<template>
  <div class="user">
    <van-nav-bar title="我的" style="border:.5px solid #ededed"></van-nav-bar>
    <div>
      <div style="text-align:center;background-color:#fff;">
        <van-image
        round
        width="8rem"
        height="8rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      
      <van-row class="user-links">
        <van-col span="6">
          <van-icon name="pending-payment" />
          待付款
        </van-col>
        <van-col span="6">
          <van-icon name="records" />
          待接单
        </van-col>
        <van-col span="6">
          <van-icon name="tosend" />
          待发货
        </van-col>
        <van-col span="6">
          <van-icon name="logistics" />
          已发货
        </van-col>
      </van-row>

      <van-cell-group class="user-group" style="margin-bottom: 15px;">
        <van-cell icon="records" title="全部订单" @click="toMyOrder" is-link />
      </van-cell-group>
      <van-cell-group>
        <van-cell icon="location-o" title="常用地址" @click="toMyaddress" is-link />
        <van-cell icon="service-o" title="联系我们" @click="showTelephone" is-link />
        <van-cell icon="smile-o" title="帮助" @click="toHelp" is-link />
        <van-cell  icon="close"  title="退出" @click="logoutHandler"  />
      </van-cell-group>
    </div>
    <!-- 联系我们的模态框  -->
    <van-action-sheet
      v-model="show"
      cancel-text="取消"
      :actions="actions"
      @cancel="onCancel"
      style="text-align:center"
    >
      <van-cell @click="onCancel"><a href="javascript:void(0)">0898-66666666</a></van-cell>
    </van-action-sheet>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
  data(){
    return {
      show:false,
      actions:[
        {name:'联系电话'}
      ]
    }
  },
  computed:{
    ...mapState('app',['token','info'])
  },
  methods:{
    ...mapActions('app',['logout']),

    //普通方法
    showTelephone(){
      this.show = true;
    },
    onCancel() {
      this.show = false;
    },
    toMyOrder(){
      this.$router.push('./Order')
    },
    toHelp(){
      this.$router.push('./Help')
    },
    toMyaddress(){
      this.$router.push('./Address')
    },
    logoutHandler(){
      this.logout().then(()=>{
        this.$router.push('../Login')
      })
      
    }
    
  }
}
</script>

<style lang="less" scoped>
.user{
  background-color:#ededed;
}
  .van-icon {
    display: block;
    font-size: 30px;
  }
  .user-links{
    text-align: center;
    padding: 15px 0;
    font-size: 12px;
    background-color: #fff;
  }
  .user-poster{
    width: 100%;
    height: 53vw;
    display: block;
  }
</style>