<template>
    <div id="merchant-list">
        <div class="title"><i class="iconfont icon-danlieliebiao icon-gap"></i> 附近商家</div>
        <template v-for="(merchant,index) in merchantMessage">
            <Merchant>
                <template v-slot:logo>
                    <img :src="require(`@/common/img/shop/${(index%4)+1}.jpg`)" alt="merchant-logo">
                </template>
                <template v-slot:detail>
                    <span class="brand">品牌</span>
                    <span class="merchant-name">{{merchant.name}}</span>
                    <div class="rating-and-sell">
                        <Stars :rating="merchant.rating"/>
                        <span class="rating">{{merchant.rating}}</span>
                        <span class="month-sell">月售{{merchant.recent_order_num}}</span>
                    </div>
                    <div class="delivery">￥{{merchant.float_minimum_order_amount}}起送/
                        {{merchant.float_delivery_fee}}
                    </div>
                </template>
                <template v-slot:activity>
                    <div>
                        <template v-for="(support) in merchant.supports">
                            <span  class="preserve">{{support.icon_name}}</span>
                        </template>
                    </div>
                    <div :style="{color:'#'+merchant.color}" class="custom-delivery">
                        {{merchant.delivery_mode.text}}
                    </div>
                </template>
            </Merchant>
        </template>
    </div>
</template>

<script>
    import {mapState, mapActions} from "vuex";
    import Merchant from "@/components/Merchant";
    import Stars from "@/components/Stars";
    import {POSITION, POSITION_STATE, MERCHANT_LIST, MERCHANT_STATE, SAVE_MERCHANT} from "@/store/config";
    import {getMerchantList} from "@/api/req/home/homePageReq";

    const {LATITUDE, LONGITUDE} = POSITION_STATE;
    const {MERCHANT_MESSAGE} = MERCHANT_STATE;
    export default {
        name: "MerchantList",
        mounted() {
            this.getMerchantList();
        },
        components: {
            Merchant, Stars
        },
        methods: {
            ...mapActions(MERCHANT_LIST, [SAVE_MERCHANT]),
            async getMerchantList() {
                let {code, data} = await getMerchantList({
                    [LATITUDE]: this.LATITUDE,
                    [LONGITUDE]: this.LONGITUDE
                });
                if (!code) {
                    this[SAVE_MERCHANT](data.data);
                } else {
                    alert("网络错误");
                }
            }
        },
        computed: {
            ...mapState(POSITION, [LATITUDE, LONGITUDE]),
            ...mapState(MERCHANT_LIST, [MERCHANT_MESSAGE]),
        }
    }
</script>

<style scoped lang="stylus">
    #merchant-list
        width 100vw
        padding: 10px
        color #a5a5a5

    .icon-gap
        margin-right 5px

</style>