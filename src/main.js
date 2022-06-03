import Vue from 'vue'
import VueRouter from "vue-router";
// import store from "./test/vuex";
import store from "@/store";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import router from "@/router";
import App from './App.vue';

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper);
Vue.use(VueRouter);

new Vue({
    // 底层会调用render,并传入一个模板解析函数，我们调用此函数并传入对应组件，
    // 其就会返回一个该组件的虚拟dom并挂载到#app上
    render: h => h(App),
    store,
    router,
    // beforeCreate() {
    //     Vue.prototype.$bus = this; // 将该vue实例绑定到Vue
    // }
}).$mount('#app')
