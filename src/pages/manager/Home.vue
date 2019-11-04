<template>
  <div class="home">
    <van-nav-bar title="首页" style="border:.5px solid #ededed"></van-nav-bar>
    <van-row>
      <img style="width:100%" src="../../assets/images/home_02.png" alt="">
    </van-row>
    <van-row>
      <van-grid :column-num="3">
        <!-- {{categories}} -->
        <van-grid-item
          @click="toCategoryList(c.id,index)"
          v-for="(c,index) in categories"
          :key="c.id"
          :icon="c.icon"
          :text="c.name"
        ></van-grid-item>
      </van-grid>
    </van-row>
    <van-row>
      <van-grid :border="false" :column-num="1" v-for="item in products" :key="item.id">
          
        <van-grid-item :text="item.name">
          <van-image :src="item.photo" />
        </van-grid-item>
      </van-grid>
    </van-row>

  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  created(){
    this.findAllCategories();
    this.queryProduct({page:0,pageSize:4});
  },
  computed:{
    ...mapState("category",["categories"]),
    ...mapState("product",["products"]),

  },
  methods:{
    ...mapActions("category",["findAllCategories"]),
    ...mapActions("product",["queryProduct"]),
    toCategoryList(id,activeKey){
      this.$router.push({path:'./categoryList',query:{id,activeKey}})
    }
  }
}
</script>