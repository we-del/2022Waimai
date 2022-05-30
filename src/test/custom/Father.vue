<template>
    <Child  ref="child"/>
</template>

<script>
    import Child from "./Child";

    export default {
        name: "Father",
        components: {
            Child
        },
        methods:{
            handlerCustom(name){
                console.log(name,1);
                return -1;
            }
        },mounted(){
            this.$refs.child.$on("custom",this.handlerCustom);
        }
    }
</script>

<style scoped>

</style>