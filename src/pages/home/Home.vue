<template>
    <div>
        <CommonHeader>
            <template v-slot:home>
                <div id="nav-header-bar">
                    <header class="nav-header">
                        <div class="nav-search icon-sousuo iconfont"></div>
                        <div class="nav-address">{{name}}</div>
                        <div class="nav-login-or-register">登录|注册</div>
                    </header>
                </div>
            </template>
        </CommonHeader>
        <HomeNav/>
        <div class="gap"></div>
        <MerchantList/>
        <Guide :cur-page="HOME"/>
    </div>
</template>

<script>
    import Guide from "@/components/Guide";
    import CommonHeader from "@/components/CommonHeader";
    import HomeNav from "@/pages/home/HomeNav";
    import MerchantList from "@/pages/home/MerchantList";
    import {mapState} from "vuex";
    import {RoutesComputed} from "@/config";
    import {POSITION} from "@/store/config";

    let {HOME} = RoutesComputed;
    export default {
        name: "Home",
        components: {
            Guide, CommonHeader, HomeNav, MerchantList
        },
        computed: {
            HOME,
            ...mapState(POSITION, ["name"])
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