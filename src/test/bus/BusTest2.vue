<template>
    <button @click="triggerBus1">BusTest2</button>
</template>

<script>
    export default {
        name: "BusTest2",
        methods:{
            busTest(param){
                console.log("我来测试busTest",param);
            },
            triggerBus1(){
                this.$bus.$emit("introduce","李四");
            }
        },
        mounted(){
            this.$bus.$on("test",this.busTest);
            this.$bus.current = "Test222";
        }
    }
</script>

<style scoped>

</style>