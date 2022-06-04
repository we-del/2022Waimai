<template>
    <div>
        <div class="go-back" @click="goBack">
            <
        </div>
        <div id="login-wrapper">
            <div class="login-title">我的外卖</div>
            <div class="login-options">
                <span class="choose-note">
                    <div :class="!isChoose ? 'chosen-css' : null" @click="isChoose=false">
                        短信登录
                    </div>
                </span>
                <span class="choose-password">
                    <div :class="isChoose ? 'chosen-css' : null" @click="isChoose=true">
                        密码登录
                    </div>
                </span>
            </div>
            <div id="login-region">
                <div class="note-login" v-show="!isChoose">
                    <input type="text" id="phone-login"  class="input-css" placeholder="手机号">
                    <input type="text"  class="input-css" placeholder="验证码">
                    <div class="tips">
                        温馨提示：本注册外卖账号的手机号在当登录时，将自动注册
                        <span>《用户服务协议》</span>
                    </div>
                </div>
                <div class="password-login" v-show="isChoose">
                    <input type="text" id="user" class="input-css" placeholder="用户名">
                    <input type="text" id="password"  class="input-css" placeholder="密码">
                    <input type="text"  class="input-css" placeholder="验证码">
                </div>
            </div>
            <div id="confirm-login-region">
                <div id="login">登录</div>
                <div id="about">关于我们</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {isChoose: true}
        },
        methods: {
            goBack() {
                console.log(this.$router);
                this.$router.go(-1);
            }
        },
        mounted() {
            console.log(this);
        }

    }
</script>

<style scoped lang="stylus">
    @import "../../common/mixins.styl";
    .input-css
        width 100%
        height 80px
        margin 10px 0
        border 1px solid $bc
        padding-left 20px
        outline-color $green

    .chosen-css
        color $green
        bottom-border-1px($green)

    .go-back
        font-size 30px
        padding-left 10px
        padding-top 20px

    #login-wrapper
        padding 70px

        .login-title
            text-align center
            font-size 50px
            padding-top 30px
            font-weight 700
            color $green

        .login-options
            display flex
            font-size 20px
            color #333333
            margin-top 60px

            div
                display inline-block
                height 40px

            .choose-note
                flex 1
                text-align right
                margin-right 20px

            .choose-password
                flex 1
                text-align left
                margin-left 20px


        #login-region
            padding-top 20px
            .tips
                color $bc
                span
                    color $green

    #confirm-login-region
        padding-top 30px
        div
            text-align center
            line-height 80px
            font-size 40px
            margin 20px 0
        #login
            background-color $green
            height 80px
            color white
        #about
            color $bc
</style>