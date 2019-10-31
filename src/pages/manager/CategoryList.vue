<template>
    <div class="categoryList">
    <van-nav-bar title="商品分类" style="border:.5px solid #ededed" left-arrow left-text="返回" @click-left="onClickLeft"></van-nav-bar>
    <van-row>
        <van-col span="5">
            <!-- 左侧导航栏 -->
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item v-for="(c,index) in categories" :key="index" :title="c.name" @click="getProductsByCategoryId(c.id)" />
                </van-sidebar>
            <!-- 左侧导航栏 -->
        </van-col>
        <van-col span="19" class="product_item">
            <!-- 右侧内容区 -->
            <!-- <van-card
            v-for="p in products" :key="p.id"
            :price="p.price"
            :desc="p.description"  
            :title="p.name"
            :thumb="p.photo"
            >
            <van-stepper v-model="value" />
            </van-card> -->
            <van-row v-for="p in products" :key="p.id">
                <van-col :span="4">
                    <img v-if="p.photo" :src="p.photo" alt="">
                    <img v-else src="src\assets\images\defaultPhoto.jpg" alt="">
                </van-col>
                <van-col :offset="1" :span="19">
                    <span>名称： {{p.name}}</span>
                    <span>价格： {{p.price}}</span>
                    <span>描述： {{p.description}}</span>
                    <van-stepper v-model="value" />
                </van-col>
            </van-row>
            <!-- 右侧内容区 -->
        </van-col>
    </van-row>
    
    
    
    </div>
</template>

<script>
import {mapMutations,mapState,mapActions,mapGetters} from 'vuex'
import {get,post,post_array} from '../../http/axios';

export default {
    data(){
        return{
            activeKey:0,
            categoryId:0,
            products:[],
            value:"1"
        }
    },
    created(){

    },
    computed:{
        ...mapState('category',['categories']),

    },
    methods:{
        ...mapActions('category',['findAllCategories']),
        onClickLeft(){
            this.$router.go(-1)
        },
        // findProductsHandle(id){
        //     this.categoryId = id;
            // console.log(this.categoryId)

        // },
        async getProductsByCategoryId(id){
            this.categoryId = id
            let response = await get("/product/findByCategoryId?id="+this.categoryId)
            this.products = response.data
            // console.log(this.products)
        }
    }
}
</script>


<style  scoped>
.product_item {
  margin:auto;
  padding:0 18px;
  padding-top: 20px;
  background:#F6F6F6;
}
.product_item span{
    display: block;
    font-size:10px;
}
.product_item img {
  width: 100%;
  border-radius: 3px;
}

</style>