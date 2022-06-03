<template>
    <div>
        <ul>
            <router-link v-for="(i,j,index) in navMsg" :key="index" :to="j" :style="{width:'100%',height:'100%'}">
                <li class="nav " :class="`${curPage === j ? 'selected' : null} `">
                    <i :class="`font-img iconfont ${ i[1]}`"></i>
                    <span class="font">
                    {{i[0]}}</span>
                </li>
            </router-link>

        </ul>
    </div>
</template>

<script>
    /**
     @description: Vue的虚拟dom解析js表达式的取值范围为 当前 组件实例，js常量，js属性和方法；
     React的虚拟dom解析js表达式的取值范围为 当前 文件，js常量，js属性和方法；
     */
    import {Routes} from "@/config";

    let {HOME, SEARCH, ORDER, YOUR_PROFILE} = Routes;
    export default {
        name: "Guide",
        props: ["curPage"],
        mounted() {
            console.log(this);
        },
        data() {
            return {
                navMsg: {
                    [HOME]: ["首页", "icon-shouye1"],
                    [SEARCH]: ["搜索", "icon-sousuo"],
                    [ORDER]: ["订单", "icon-quanbudingdan"],
                    [YOUR_PROFILE]: ["我的", "icon-yonghu1"]
                },
            };
        }
    }
</script>

<style scoped lang="stylus">
    @import "../common/mixins.styl"
    .selected
        color $green
        /*color #479db8*/

    div
        position fixed
        bottom 0
        left 0
        z-index 888
        background-color white
        ul
            top-border-1px($bc)
            display flex
            flex-flow row nowrap
            justify-content space-between
            align-items center
            width 100vw
            height 100px
            line-height 80px
            text-align center

            li
                width 100%
                height 100%

            .font-img
                display block
                height 20%
                margin-bottom 15px !important
                font-size 50px !important

            .font
                font-size 20px
                left 0
                right 0
                position relative
</style>