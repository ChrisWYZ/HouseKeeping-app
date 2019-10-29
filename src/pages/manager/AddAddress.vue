<template>
    <div class="Addaddress">
        <van-nav-bar title="添加地址" style="border:.5px solid #ededed" left-arrow @click-left="onClickLeft"></van-nav-bar>
        <van-address-edit
        show-postal
        @save="onSave"
        ></van-address-edit>
    </div>
</template>

<script>
export default {
    data(){
        return {
            address:{},
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        onSave(){
            console.log("保存")
        }
    }
}
</script>