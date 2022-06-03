/* 
 * 2022/6/1 19:25
 * author: xxx
 * @description:
 */
 
import Vuex from "vuex";
import Vue from "vue";
import position from "@/store/position";
import merchantList from "@/store/merchantList";
import {POSITION,MERCHANT_LIST} from "./config";
Vue.use(Vuex);
export default  new Vuex.Store({
    modules:{
        [POSITION]:position,
        [MERCHANT_LIST]: merchantList
    }
});