<template>
    <button @click="triggerTest">BusTest1</button>
</template>

<script>
    export default {
        name: "BusTest1",
        methods:{
            introduce(param){
                console.log("我来绑定事件总线",param);
            },
            triggerTest(){
                this.$bus.$emit("test","张三");
                console.log( this.$bus.current );
            }
        },
        mounted(){
            this.$bus.$on("introduce",this.introduce);
        }
    }
</script>

<style scoped>

</style>