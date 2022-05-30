<template>
    <div>
        <h1>order Page</h1>
        <Guide :cur-page="ORDER"/>
    </div>
</template>

<script>
    import Guide from "../components/Guide";
    import {RoutesComputed} from "@/config";
    let {ORDER} = RoutesComputed;
    export default {
        name: "Order",
        components: {Guide},
        computed:{
            ORDER
        }
    }
</script>

<style scoped>

</style>