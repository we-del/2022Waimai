<template>
    <div id="content-container">
        <div class="search-result" v-for="(i) of list">
            <ReqItem :list="i" :key="i.id"/>
        </div>
    </div>
</template>

<script>
    import ReqItem from "./ReqItem";
    export default {
        name: "ReqContent",
        props:["list"],
        components:{ReqItem}
    }
</script>

<style scoped>
    #content-container{
        display:flex;
        flex-flow: row wrap ;
    }
    .search-result{
        width: 25%;
    }
</style>