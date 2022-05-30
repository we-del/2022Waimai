<template>
    <div>
        <h1>search page</h1>
        <Guide :cur-page="SEARCH"/>
    </div>
</template>

<script>
    import Guide from "../components/Guide";
    import {RoutesComputed} from "@/config";
    let {SEARCH} = RoutesComputed;
    export default {
        name: "Search",
        components: {Guide},
        computed:{
            SEARCH
        }
    }
</script>

<style scoped>

</style>