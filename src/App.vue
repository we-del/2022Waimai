<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import TodoList from "./test/todolist/TodoList";
    import Computer from "./test/vuex/Computer";
    // import Father from "./test/custom/Father";
    import BusTest1 from "./test/bus/BusTest1";
    import BusTest2 from "./test/bus/BusTest2";
    import Transi from "./test/transition/Transi";
    import ReqShow from "./test/req/ReqShow";
    import Father from "./test/slot/Father";

    export default {
        name: 'App',
        components: {
            TodoList, Father, BusTest1, BusTest2, Transi, ReqShow, Computer
        },
    }
</script>

<style scoped lang="stylus">

</style>
