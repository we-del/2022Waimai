import Vue from 'vue'
import VueRouter from "vue-router";
import router from "@/router";
// import router from "./router";
import store from "./test/vuex";
import App from './App.vue'
Vue.config.productionTip = false

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
