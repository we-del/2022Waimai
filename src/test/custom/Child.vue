<template>
    <div>

        <button @click="handler">children完成调用</button>
    </div>
</template>

<script>
    export default {
        name: "Child",
        methods:{
            handler(){
                let res = this.$emit("custom","name");
                console.log(res,1);
            }
        },mounted(){
            console.log("11");
        }
    }
</script>

<style scoped>

</style>