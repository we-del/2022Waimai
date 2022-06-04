<template>
    <div>
        <slot name="home"></slot>
        <slot name="search"></slot>
        <slot name="order"></slot>
        <slot name="profile"></slot>
    </div>

</template>

<script>
    import {mapActions} from "vuex";
    import {getPositionReq} from "@/api/req/home/homePageReq";
    import {SAVE_POSITION, POSITION} from "@/store/config";

    export default {
        name: "CommonHeader",
        methods: {
            /**
             @description: 存储位置信息到store中
             */
            async getPosition() {
                console.log(this);
                let {data} = await getPositionReq();
                if (!data.code) {
                    console.log(data);
                    this[SAVE_POSITION](data.data)
                } else {
                    alert("网络错误，请稍后再试");
                }
            },
            ...mapActions(POSITION, [SAVE_POSITION]),
        },
        mounted() {
            this.getPosition();
        }
    }
</script>

<style scoped lang="stylus">
    @import "../common/mixins.styl";
    .title
        text-align center
        font-size 40px
        line-height 100px
        color white
        background-color $green
    #nav-header-bar
        position fixed
        left 0
        top 0
        z-index 999

    .nav-header
        display flex
        width 100vw
        height 100px
        color white
        line-height 100px
        background-color $green

        .nav-search
            flex 2
            font-size 60px
            margin-left 20px

        .nav-address
            flex 4
            font-size 45px
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            -o-text-overflow ellipsis

        .nav-login-or-register
            flex 2
            text-align center
            font-size 28px
</style>