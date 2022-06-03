<template>
    <div class="merchant">
        <div class="content">
            <div class="merchant-logo">
                <slot name="logo"></slot>
            </div>
            <div class="merchant-detail">
                <slot name="detail"></slot>
            </div>
            <div class="merchant-activity">
                <slot name="activity"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Merchant"
    }
</script>

<style scoped lang="stylus">
    @import "../common/mixins.styl";
    img
        height 100%
        width 100%
    .merchant
        height 200px
        padding-top 20px
        padding-bottom 20px
        padding-right 40px

        .content
            display flex
            height 100%
            .merchant-logo
                flex 3

            .merchant-detail
                flex 6
                padding 10px
                .brand
                    color black
                    background-color $yellow
                    font-size 8px
                    font-weight 700
                    margin-right 10px
                .merchant-name
                    color black
                    font-weight 700
                    font-size 32px
                .rating-and-sell
                    margin 40px 0
                    .rating
                        margin-right 10px

            .merchant-activity
                flex 2
                .preserve
                    display inline-block
                    color #a5aaa4
                    font-size 26px
                    margin-right 10px
                    margin-top 20px
                    margin-bottom 30px

                .custom-delivery
                    display inline-block
                    border 1px solid $green
                    font-size 8px
                    color $green

</style>