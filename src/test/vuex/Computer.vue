<template>
    <div>
        <h2>当前总数为{{count}}</h2>
        <select v-model="n" id="default">
            <option :value="1" selected>1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="subtract(n)">sub</button>
        <button @click="add(n)">add</button>
        <h1>放大的数为{{magnify}}</h1>
    </div>
</template>

<script>
    import {mapState, mapActions,mapGetters} from "vuex";
    import {ADD, SUBTRACT} from "./config";

    export default {
        name: "Computer",
        data() {
            return {n: 1};
        },
        computed: {
            ...mapState("countOpt", ["count"]),
            ...mapGetters("countOpt",["magnify"])
        },
        methods: {
            ...mapActions("countOpt", [ADD, SUBTRACT]),
        },
        mounted(){
            console.log(this);
        }
    }
</script>

<style scoped>

</style>