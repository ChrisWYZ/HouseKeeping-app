<template>
  <div class="order">
    <van-nav-bar title="订单" style="border:.5px solid #ededed"></van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="全部订单">
            <!-- {{orders}} -->
            <van-card
              v-for="c in orders"
              :title="c.id" :key="c.id" :name="c.id"
              :desc="c.status"  
              thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            >
            <div slot="footer">
              <van-button size="mini" @click="numAdd(c.total)">+</van-button>
              {{c.total}}
              <van-button size="mini" @click="numcut(c.total)">-</van-button>
              <van-button type="danger" size="mini" @click="deleteOrderById(c.id)">删除</van-button>
            </div>
            </van-card>
      </van-tab>
      <van-tab title="未付款">
        <!-- {{orderss}} -->
        <van-card
              v-for="c in orderss"
              :title="c.id" :key="c.id" :name="c.id"
              :desc="c.status"  
              thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            >
            <div slot="footer">
              <van-button size="mini" @click="numAdd(c.total)">+</van-button>
              {{c.total}}
              <van-button size="mini" @click="numcut(c.total)">-</van-button>
              <van-button type="danger" size="mini" @click="deleteOrderById(c.id)">删除</van-button>
            </div>
            </van-card>
      </van-tab>
      <van-tab title="待派单">
        <van-card
              v-for="c in ordersss"
              :title="c.id" :key="c.id" :name="c.id"
              :desc="c.status"  
              thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            >
            <div slot="footer">
              <van-button size="mini" @click="numAdd(c.total)">+</van-button>
              {{c.total}}
              <van-button size="mini" @click="numcut(c.total)">-</van-button>
              <van-button type="danger" size="mini" @click="deleteOrderById(c.id)">删除</van-button>
            </div>
            </van-card>
      </van-tab>
      <van-tab title="未服务">
        <van-card
              v-for="c in orderssss"
              :title="c.id" :key="c.id" :name="c.id"
              :desc="c.status"  
              thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            >
            <div slot="footer">
              <van-button size="mini" @click="numAdd(c.total)">+</van-button>
              {{c.total}}
              <van-button size="mini" @click="numcut(c.total)">-</van-button>
              <van-button type="danger" size="mini" @click="deleteOrderById(c.id)">删除</van-button>
            </div>
            </van-card>
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
      activeName:["1"]
    }
  },
  created(){
    Toast.loading({
      duration:1000,
      message:'加载中...'
    })
    this.findAllOrders();
    this.unPayOrders();
    this.unSendOrders();
    this.unServeOrders();
    this.deleteOrderById();

  },
  computed:{
    ...mapState("order",["orders","orderss","ordersss","orderssss","unSendOrder"])
  },
  methods:{
    ...mapActions("order",["findAllOrders","unPayOrders","unSendOrders","unServeOrders","deleteOrderById"]),
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