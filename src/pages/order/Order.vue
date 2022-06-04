<template>
    <div>
        <CommonHeader>
            <div class="title" slot="order">订餐</div>
        </CommonHeader>
        <div class="not-login">
            <img src="../../common/img/order/person.png" alt="verify-login">
        </div>
        <div class="login-tips"> 登录后查看外卖订单</div>
        <div id="login-wrapper">
            <router-link to="/login">
                <div class="quick-login">立即登录</div></router-link>
        </div>
        <Guide :cur-page="ORDER"/>
    </div>
</template>

<script>
    import Guide from "../../components/Guide";
    import CommonHeader from "@/components/CommonHeader";
    import {RoutesComputed} from "@/config";

    let {ORDER} = RoutesComputed;
    export default {
        name: "Order",
        components: {Guide, CommonHeader},
        computed: {
            ORDER
        }
    }
</script>

<style scoped lang="stylus">
    .login-tips
        text-align center
        color #cccccc
    .not-login
        width 400px
        height 400px
        margin 200px auto
        &>img
            width 100%
            height 100%
    #login-wrapper
        margin 20px auto
        .quick-login
            text-align center
            line-height 70px
            width 200px
            height 70px
            color white
            margin 20px auto
            outline none
            border 0
            background-color #02a774
</style>