<template>
    <div>
        <slot>我来展示该组件实例标签的包裹虚拟dom</slot>
        <slot name="nb" >我来展示该组件实例标签的包裹虚拟dom</slot>
    </div>
</template>

<script>
    export default {
        name: "Child",
        data(){
            return {
                desc:"你真优秀"
            };
        }
    }
</script>

<style scoped>

</style>