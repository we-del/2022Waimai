<template>
    <Child>
        <h1>孩子你真棒</h1>
        <template v-slot:nb >
            <h1>你真nb</h1>
            <h2>可以给我签个名吗</h2>
        </template>
    </Child>
</template>

<script>
    import Child from "./Child";
    export default {
        name: "Father",
        components:{
            Child
        }
    }
</script>

<style scoped>

</style>