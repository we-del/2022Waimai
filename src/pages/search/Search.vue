<template>
    <div>
        <CommonHeader>
            <div slot="search" class="title">搜索</div>
        </CommonHeader>
        <div class="search-region">
            <input type="text" id="search-input" placeholder="请输入商家或美食名称">
            <button id="commit-search">提交</button>
        </div>
        <Guide :cur-page="SEARCH"/>
    </div>
</template>

<script>
    import Guide from "../../components/Guide";
    import CommonHeader from "@/components/CommonHeader";
    import {RoutesComputed} from "@/config";
    let {SEARCH} = RoutesComputed;
    export default {
        name: "Search",
        components: {Guide,CommonHeader},
        computed:{
            SEARCH,
        }
    }
</script>

<style scoped lang="stylus">
    .search-region
        display flex
        padding 20px
        #search-input
            flex 4
            height 80px
            background-color #cccccc
            padding-left 10px
            margin-right 20px
            outline none
            border 0
        #commit-search
            flex 1
            height 80px
            outline none
            border 0
            color white
            font-size 40px
            border-radius 3px
            background-color #02a774
</style>