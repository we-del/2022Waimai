<template>
    <div id="req-list">
        <ReqSearch/>
        <ReqContent :list="searchList"/>
    </div>
</template>

<script>
    import ReqContent from "./ReqContent";
    import ReqSearch from "./ReqSearch";

    export default {
        name: "ReqShow",
        components: {
            ReqContent, ReqSearch
        },
        data() {
            return {
                searchList: []
            };
        },
        methods: {
            addList(resList) {
                console.log(resList);
                console.log("我被调用了");
                resList.forEach(item=>{
                    let {name, id, html_url, owner: {avatar_url}} = item;
                    this.searchList.unshift({name, id, html_url, avatar_url});
                })
            }
        },
        mounted() {
            this.$bus.$on("addSearchList", this.addList);

        }
    }
</script>

<style scoped>
    #req-list {
        margin: 0 100px;
    }
</style>