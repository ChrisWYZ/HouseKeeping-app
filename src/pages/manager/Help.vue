<template>
    <div class="help">
        <van-nav-bar title="帮助" left-arrow @click-left="onClickLeft"></van-nav-bar>
        <van-collapse v-model="activeNames">
        <van-collapse-item title="常见问题" name="1">
            <van-cell>
            1.优惠卷如何使用
            </van-cell>
            <van-cell>
            2.取消订单钱什么时候到账
            </van-cell>
            <van-cell>
            3.下单后如何跟进物流状况
            </van-cell>
        </van-collapse-item>
        <van-collapse-item title="更多问题" name="2">
            <van-row>
                <van-col span="8">订单相关</van-col>
                <van-col span="8">客户端使用</van-col>
                <van-col span="8">优惠卷</van-col>
            </van-row>
            <van-row>
                <van-col span="8">支付情况</van-col>
                <van-col span="8">服务相关</van-col>
                <van-col span="8">物流相关</van-col>
            </van-row>
        </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activeNames:['1','2']
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        }
    }
}
</script>

<style  scoped>
    .van-row {
        text-align: center
    }
    .van-col {
        padding: 2em;
        height: 80px;
        border: .5px solid #ededed;
    }
</style>