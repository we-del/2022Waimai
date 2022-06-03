<template>
    <div>
        <HomeHeader/>
        <HomeNav/>
        <div class="gap"></div>
        <MerchantList/>
        <Guide :cur-page="HOME"/>
    </div>
</template>

<script>
    import Guide from "@/components/Guide";
    import HomeHeader from "@/pages/home/HomeHeader";
    import HomeNav from "@/pages/home/HomeNav";
    import MerchantList from "@/pages/home/MerchantList";
    import {RoutesComputed} from "@/config";

    let {HOME} = RoutesComputed;
    export default {
        name: "Home",
        components: {
            Guide,HomeHeader,HomeNav,MerchantList
        },
        computed: {
            HOME
        }
    }
</script>

<style scoped lang="stylus">
    div
        width 100vw
        overflow hidden
    .gap
        height: 20px
        background-color #f3f3f3

</style>