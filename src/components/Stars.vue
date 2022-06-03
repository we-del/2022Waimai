<template>
    <div class="stars">
        <span class="star" v-for="state in generateStars" :class="state"></span>
    </div>
</template>

<script>
    export default {
        name: "Stars",
        props: ["rating"],
        computed: {
            generateStars() {
                let rating = this.rating;
                let arr = [];
                while (rating > 0) {
                    if (rating > 1) {
                        arr.push("on");
                    } else if (rating > 0.5) {
                        arr.push("half");
                    } else {
                        arr.push("off");
                    }
                    rating -= 1;
                }
                return arr;
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "../common/mixins.styl";
    .stars
        display inline-block
    .star
        display inline-block
        width 20px
        height 20px
    .on
        background-size cover
        bg-image("../common/img/stars/star48_on")

    .half
        bg-image("../common/img/stars/star48_half")
        background-size cover

    .off
        bg-image("../common/img/stars/star48_off")
        background-size cover
</style>