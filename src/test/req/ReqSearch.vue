<template>
    <div id="req-search">
        <div class="search-region">
            <h1>Search Github Users</h1>
            <input type="text" class="input-require-user" @keyup.enter="sendReqToGithub"
                   v-model="searchContent" placeholder="请输入查询内容">
            <button @click="sendReqToGithub">搜索</button>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "ReqSearch",
        data() {
            return {searchContent: ""};
        },
        methods: {
            async sendReqToGithub() {
                if (!this.searchContent.trim().length > 0) return;
                console.log(this.searchContent.trim().length);
                let q = this.searchContent;
                let s = "stars";
                let url = `https://api.github.com/search/repositories?q=${q}&sort=${s}`;
                let res = await axios.get(url);
                console.log(res);
                this.$bus.$emit("addSearchList",res.data.items);
                console.log("触发成功");
                this.searchContent = "";
            }
        }
    }
</script>

<style scoped>
    #req-search {
        height: 140px;
        width: 100%;
        background-color: #eeeeee;
        padding-top: 10px;
        padding-left: 10px;
    }

    .search-region {
    }
</style>