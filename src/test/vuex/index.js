/* 
 * 2022/5/27 10:51
 * author: xxx
 * @description:
 */
import Vue from "vue";
import Vuex from "vuex";
import count from "./count";
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        countOpt: count
    }
});