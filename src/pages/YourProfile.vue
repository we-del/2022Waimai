<template>
    <div>
        <h1>我的信息</h1>
        <Guide :cur-page="YOUR_PROFILE"/>
    </div>
</template>

<script>
    import Guide from "../components/Guide";
    import {RoutesComputed} from "@/config";
    let {YOUR_PROFILE} = RoutesComputed;
    export default {
        name: "YourProfile",
        components: {Guide},
        computed:{
            YOUR_PROFILE
        }
    }
</script>

<style scoped>

</style>