<template>
  <div class="order">
    <van-nav-bar title="订单" style="border:.5px solid #ededed"></van-nav-bar>
    
    <van-tabs v-model="active" swipeable>
      <van-tab title="所有订单">
        <van-cell-group v-for="(item,index) in orders" :key="index">
          <van-cell>
            <div>状态：{{item.status}}</div>
            <div>下单时间：{{item.orderTime | datefmt}}</div>
            <div>订单价格：￥{{item.total}}</div>
            <div>
              所属顾客：{{item.customer.realname}}
              联系方式：{{item.customer.telephone}}  
            </div>

          </van-cell>
        </van-cell-group>
      </van-tab>
      <van-tab title="未支付">
        <van-cell-group v-for="item in orderZF" :key="item.index">
          <van-cell>
            <div>状态：{{item.status}}</div>
            <div>下单时间：{{item.orderTime | datefmt}}</div>
            <div>订单价格：￥{{item.total}}</div>
            <div>
              所属顾客：{{item.customer.realname}}
              联系方式：{{item.customer.telephone}}  
            </div>
          </van-cell>
        </van-cell-group>
      </van-tab>
      <van-tab title="待派单">
        <van-cell-group  v-for="item in orderPD" :key="item.index">
          <van-cell>
            <div>状态：{{item.status}}</div>
            <div>下单时间：{{item.orderTime | datefmt}}</div>
            <div>订单价格：￥{{item.total}}</div>
            <div>
              所属顾客：{{item.customer.realname}}
              联系方式：{{item.customer.telephone}}  
            </div>
          </van-cell>
        </van-cell-group>
      </van-tab>
      <van-tab title="待接单">
        <van-cell-group v-for="item in orderJD" :key="item.index">
          <van-cell>
            <div>状态：{{item.status}}</div>
            <div>下单时间：{{item.orderTime | datefmt}}</div>
            <div>订单价格：￥{{item.total}}</div>
            <div>
              所属顾客：{{item.customer.realname}}
              联系方式：{{item.customer.telephone}}  
            </div>
          </van-cell>
        </van-cell-group>
      </van-tab>
      <van-tab title="未服务">
        <van-cell-group  v-for="item in orderFW" :key="item.index">
          <van-cell>
            <div>状态：{{item.status}}</div>
            <div>下单时间：{{item.orderTime | datefmt}}</div>
            <div>订单价格：￥{{item.total}}</div>
            <div>
              所属顾客：{{item.customer.realname}}
              联系方式：{{item.customer.telephone}}  
            </div>
          </van-cell>
        </van-cell-group>
      </van-tab>
      <van-tab title="已完成">
        <van-cell-group  v-for="item in orderWC" :key="item.index">
          <van-cell>
            <div>状态：{{item.status}}</div>
            <div>下单时间：{{item.orderTime | datefmt}}</div>
            <div>订单价格：￥{{item.total}}</div>
            <div>
              所属顾客：{{item.customer.realname}}
              联系方式：{{item.customer.telephone}}  
            </div>
          </van-cell>
        </van-cell-group>
      </van-tab>
      <van-tab title="待确认">
        <van-cell-group v-for="item in orderQD" :key="item.index">
          <van-cell>
            <div>状态：{{item.status}}</div>
            <div>下单时间：{{item.orderTime | datefmt}}</div>
            <div>订单价格：￥{{item.total}}</div>
            <div>
              所属顾客：{{item.customer.realname}}
              联系方式：{{item.customer.telephone}}  
            </div>
          </van-cell>
        </van-cell-group>
      </van-tab>
      
    </van-tabs>
  </div>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'
import {Toast} from 'vant'
export default({
  data(){
    return {
      active:0,
      activeName:["1"],
    }
  },
  created(){
    Toast.loading({
      duration:800,
      message:'加载中...'
    })
    this.findAllOrders(this.info.id);

  },
  computed:{
    ...mapState("order",["orders","orderFW","orderPD","orderZF","orderQD","orderWC","orderJD"]),
    ...mapState('app',['token','info'])
  },
  methods:{
    ...mapActions("order",["findAllOrders","deleteOrderById"]),
    numAdd(total){
      total=total+1
    },
    numcut(total){
      total=total-1
      alert(total)
    },
  }

})
</script>
<style scoped>
  .top{
    text-align: center;
  }
  .message{
    text-align: left;
  }
</style>