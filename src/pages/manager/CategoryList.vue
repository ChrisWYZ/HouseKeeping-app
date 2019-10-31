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
        <van-col span="19">
            <!-- 右侧内容区 -->
            <van-card
            v-for="p in products" :key="p.id"
            :price="p.price"
            :desc="p.description"  
            :title="p.name"
            :thumb="p.photo"
            />
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
            products:[]
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
            console.log(this.products)
        }
    }
}
</script>