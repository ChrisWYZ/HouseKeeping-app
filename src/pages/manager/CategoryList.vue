<template>
    <div class="categoryList">
    <van-nav-bar title="商品分类" style="border:.5px solid #ededed" left-arrow left-text="返回" @click-left="onClickLeft"></van-nav-bar>
    <van-row >
        <van-col span="5">
            <!-- 左侧导航栏 -->
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item v-for="(c,index) in categories" :key="index" :title="c.name" @click="getProductsByCategoryId(c.id)" />
                </van-sidebar>
            <!-- 左侧导航栏 -->
        </van-col>
        <van-col span="19" class="product_item"  v-for="item in products" :key="item.id">
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
            <van-row >
                <van-col :span="4">
                    <img v-if="item.photo" :src="item.photo" alt="">
                    <img v-else src="../../assets/images/defaultPhoto.jpg" alt="">
                </van-col>
                <van-col :offset="1" :span="19">
                    <span>名称： {{item.name}}</span>
                    <span>价格： {{item.price}}</span>
                    <span>描述： {{item.description}}</span>
                    <van-stepper v-model="item.number" min="0"/>
                </van-col>
                
            </van-row>
            <van-submit-bar
                :price="total*100"
                button-text="提交订单"
                @submit="numberChangeHandler(item)"
                >
            </van-submit-bar>
            <!-- 右侧内容区 -->
        </van-col>
    </van-row>
    
    
    
    </div>
</template>

<script>
import {mapMutations,mapState,mapActions,mapGetters} from 'vuex'
import {get,post,post_array} from '../../http/axios';
import ConfirmOrderVue from './ConfirmOrder.vue';

export default {
    data(){
        return{
            activeKey:0,
            categoryId:"",
            products:[],
        }
    },
    created(){
        
    },
    computed:{
        ...mapState('category',['categories']),
        ...mapGetters('shopcar',['total']),
    },
    methods:{
        ...mapActions('category',['findAllCategories']),
        ...mapMutations('shopcar',['addShopCar']),
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
        },
        numberChangeHandler(item){
            let orderLine = {
                productId:item.id,
                productName:item.name,
                price:item.price,
                number:item.number
            }
            this.$router.push('./ConfirmOrder')
            console.log(orderLine);
            this.addShopCar(orderLine);
        }
    }
}
</script>


<style  scoped>
.product_item {
    margin:auto;
    padding:0 18px;
    padding-top: 20px;
    background:rgb(255, 255, 255);
    border-bottom: .5px solid #efefef;
}
.product_item span{
    display: block;
    font-size:13px;
}
.product_item img {
  width: 100%;
  border-radius: 3px;
}

</style>