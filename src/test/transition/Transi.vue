<template>
    <div>
        <button @click="flag=!flag">展示/</button>
        <transition
            name="animate__animated animate__bounce"
            enter-active-class="animate__lightSpeedInLeft"
            leave-active-class="animate__rotateOut"
        >
            <div v-show="flag">我来展示</div>
        </transition>
    </div>
</template>

<script>
    import "animate.css";
    export default {
        name: "Transi",
        data(){
            return{flag:false};
        }
    }
</script>

<style scoped>
    .v-enter{
        transform: translateX(-100%);
    }
    .v-enter-to{
        transform: translateX(0);
    }
    .v-enter-active{
        transition: 1s all ease;
    }
    div{
        background-color: palegreen;
        font-size: 24px;
    }
</style>