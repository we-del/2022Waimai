<template>
    <div>

        <h1>我是首页</h1>
        <Guide :cur-page="HOME"/>
    </div>
</template>

<script>
    import Guide from "@/components/Guide";
    import {RoutesComputed} from "@/config";

    let {HOME} = RoutesComputed;
    export default {
        name: "Home",
        components: {
            Guide
        },
        computed: {
            HOME
        }
    }
</script>

<style scoped>

</style>