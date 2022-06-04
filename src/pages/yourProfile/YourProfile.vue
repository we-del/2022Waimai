<template>
    <div>
        <CommonHeader>
            <div class="title" slot="profile">我的</div>
        </CommonHeader>

        <div id="profile-message-wrapper">
            <!--            用户信息-->
            <router-link to="/login">
                <div id="profile-content">
                    <div class="not-login">
                        <div class="user-avatar">
                            <i class="iconfont icon-yonghufill user-font"></i>
                        </div>
                        <div class="go-to-login">
                            <div class="login-or-register">登录/注册</div>
                            <p><i class="iconfont icon-shouji"></i>
                                暂无绑定手机
                            </p>
                        </div>
                        <div class="gadget"> ></div>
                    </div>
                </div>
            </router-link>
            <!--            用户余额信息-->
            <div id="user-balance">
                <div class="money">
                    <div class="current-money">
                        <span>0.00</span>元
                    </div>
                    <p>我的余额</p>
                </div>
                <div class="discount">
                    <div class="current-discount">
                        <span>0.00</span>个
                    </div>
                    <p>我的优惠</p>
                </div>
                <div class="score">
                    <div class="current-score">
                        <span>0.00</span>分
                    </div>
                    <p>我的积分</p>
                </div>
            </div>

            <div id="service">
                <div class="profile-order" v-for="(val,key) in service">
                    <i :class="key"></i> {{val}}
                    <span> > </span>
                </div>
            </div>
        </div>


        <Guide :cur-page="YOUR_PROFILE"/>
    </div>
</template>

<script>
    import Guide from "../../components/Guide";
    import CommonHeader from "@/components/CommonHeader";
    import {RoutesComputed} from "@/config";

    let {YOUR_PROFILE} = RoutesComputed;
    export default {
        name: "YourProfile",
        components: {Guide, CommonHeader},
        computed: {
            YOUR_PROFILE
        },
        data() {
            return {
                service: {
                    // 渲染service部分 ， 属性为样式集  属性值为 内容
                    "iconfont icon-dingdan order": "我的订单",
                    "iconfont icon-shangcheng shop": "积分商城",
                    "iconfont icon-huiyuan5 vip": "外卖会员卡",
                    "iconfont icon-a-3yewufuwuzhongxin serve": "服务中心",
                    // "我的订单": ["iconfont icon-dingdan ", "order"],
                    // "积分商城": ["iconfont icon-shangcheng", "shop"],
                    // "外卖会员卡": ["iconfont icon-huiyuan5 ", "vip"],
                    // "服务中心": ["iconfont icon-a-3yewufuwuzhongxin ", "serve"],
                }
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/mixins.styl";

    .order
        color $green
        margin-right 10px

    .shop
        color #ff5f3e
        margin-right 10px

    .vip
        color #ffa725
        margin-right 10px

    .serve
        color #05a875
        margin-right 10px

    #profile-message-wrapper
        margin-top 3px

        #profile-content
            height 130px
            background-color $green
            padding 30px 10px

            .not-login
                display flex
                height 100%

                .user-avatar
                    flex 2
                    border-radius 50%
                    text-align center
                    line-height 130px
                    background-color #cccccc

                    .user-font
                        font-size 140px
                        color #595959

                .go-to-login
                    flex 7
                    padding-left 20px
                    color white

                    .login-or-register
                        font-weight 700
                        font-size 40px
                        margin: 20px 0

                .gadget
                    flex 1
                    text-align center
                    line-height 130px
                    color white
                    font-size 30px

        #user-balance
            display flex
            height 200px
            color #7e8c8d
            text-align center
            line-height 60px

            .money
                flex 1
                padding-top 30px
                border-right 1px solid #f8f8f8
                bottom-border-1px(#f8f8f8)

                .current-money > span
                    font-size 50px
                    color #ff9900

            .discount
                flex 1
                padding-top 30px
                border-right 1px solid #f8f8f8
                bottom-border-1px(#f8f8f8)

                .current-discount > span
                    font-size 50px
                    color #ff5f3e

            .score
                flex 1
                padding-top 30px
                bottom-border-1px(#f8f8f8)

                .current-score > span
                    font-size 50px
                    color #6ac20b

        #service
            padding: 0 20px
            margin-top 10px
            top-border-1px(#f8f8f8)

            .profile-order
                height 80px
                line-height 80px
                bottom-border-1px(#f8f8f8)
                font-size 30px

                span
                    float: right
</style>