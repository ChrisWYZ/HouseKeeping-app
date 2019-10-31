<template>
    <div class="Addaddress">
        <van-nav-bar title="添加地址" style="border:.5px solid #ededed" left-arrow @click-left="onClickLeft"></van-nav-bar>
        <!-- <van-address-edit
        show-postal
        @save="onSave"
        ></van-address-edit> -->

        <van-cell-group>
            {{address}}
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
                v-model="address.address"
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
            <van-field :v-model="address.customerId"></van-field>
            {{info}}
        </van-cell-group>

    </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
    data(){
        return {
            address:{
                province:"",
                city:"",
                area:"",
                address:"",
                telephone:"",
                // customerId:this.info.id
            },
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
        onSave(){
            console.log("保存")
        }
    }
}
</script>