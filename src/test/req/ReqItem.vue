<template>
    <div id="item-wrap">
        <a :href="list.html_url">
            <div class="show-img">
                <img :src="list.avatar_url" alt="logo" :style="{height:'100px',width:'100px'}">
            </div>
            <span>{{list.name}}</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "ReqItem",
        data(){
            return {
                url:""
            };
        },
        props:["list"]
    }
</script>

<style scoped lang="less">
    #item-wrap{
        height: 300px;
        text-align: center;
        display:flex;
        justify-content: center;
        align-items:center;
        border: 1px solid #ccc;
        margin-right:-1px;
        margin-bottom:-1px;
    }
</style>