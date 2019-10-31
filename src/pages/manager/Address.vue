<template>
    <div class="address">
        <van-nav-bar title="我的地址" style="border:.5px solid #ededed" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
        <van-address-list
            @add="onAdd"
            @edit="onEdit"
            v-model="chosenAddressId"
            v-for="(item,index) in addresses" :key="index"
            :list="[{
                id:item.id,
                name:item.customerId,
                tel:item.telephone,
                address:item.province+item.city+item.area+item.address
            }]"
            class="list">
            
        </van-address-list>
    </div>
</template>




<script>
    import {mapState,mapActions} from 'vuex'
    import { Toast, Info } from 'vant';
    export default {
        data(){
            return {
                chosenAddressId:'1'
            }
        },
        created(){
            Toast.loading({
                duration:800,
                forbidClick: true,
                message:'加载中...'
            })
            this.findAddressByCustomerId(this.info.id);
            // console.log (this.info.id)
        },
        computed:{
            ...mapState('address',['addresses']),
            ...mapState('app',['info','token']),
            ...mapState('address',['addresses'])
        },
        methods:{
            ...mapActions('address',['findAddressByCustomerId']),
            //普通方法
            onClickLeft() {
                this.$router.go(-1)
                // console.log('返回');
            },
            onAdd() {
                // console.log('新增地址');
                this.$router.push('./AddAddress')
            },

            onEdit(item) {
                console.log(item.id)
                this.$router.push('/AddAddress')
            }
        }
    }
</script>
<style  scoped>
    .list{
        padding-bottom: 0px;
    }
</style>