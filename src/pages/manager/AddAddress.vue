<template>
    <div class="Addaddress">
        <van-nav-bar title="添加地址" style="border:.5px solid #ededed" left-arrow @click-left="onClickLeft"></van-nav-bar>
       
        <van-cell-group>
            <van-field
                rows="2"
                v-model="address.province"
                label="省份"
                type="text"
                placeholder="请输入省份"
                show-word-limit
            />
            <van-field
                rows="2"
                v-model="address.city"
                label="城市"
                type="text"
                placeholder="请输入城市"
                show-word-limit
            />
            <van-field
                rows="2"
                v-model="address.area"
                label="地区"
                type="text"
                placeholder="请输入地区"
                show-word-limit
            />
            <van-field
                rows="2"
                v-model="address.adds"
                label="详细地址"
                type="text"
                placeholder="请输入详细地址"
                show-word-limit
            /> 
            <van-field
                rows="2"
                v-model="address.telephone"
                label="联系电话"
                type="text"
                placeholder="请输入联系电话"
                show-word-limit
            /> 
            <van-button size="default" round style="width:100%;margin-top:2em;" type="primary" @click="saveOrderHandler(address)">保存地址</van-button>
            <van-button size="default" round style="width:100%;margin-top:1em;" type="danger" @click="deleteOrderHandler">删除</van-button>

            
            {{address}}
        </van-cell-group>

    </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
    data(){
        return {
            address:{
                id:"",
                province:"",
                city:"",
                area:"",
                adds:"",
                telephone:"",
            },
        }
    },
    created(){
        if(this.$route.query.data != undefined ){
            this.address =JSON.parse(this.$route.query.data)
        }
    },
    computed:{
        ...mapState('app',['info','token'])
    },
    methods:{
        ...mapActions('address',['saveOrUpdateAddress']),
        onClickLeft(){
            this.$router.go(-1)
        },
        saveOrderHandler(address){
            // console.log(this.address)
            this.saveOrUpdateAddress(address).then(()=>{
                this.$notify({ type: 'success', message: '保存成功' });
                this.$router.go(-1)
            })
        },
        deleteOrderHandler(){

        }
    }
}
</script>


<style  scoped>

</style>