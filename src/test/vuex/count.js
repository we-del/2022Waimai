/* 
 * 2022/5/28 11:14
 * author: xxx
 * @description:
 */

import {ADD, SUBTRACT} from "./config";

export default {
    namespaced:true,
    actions: {
        [ADD](context, value) {
            console.log(context);
            console.log(value);
            context.commit(ADD, value);
        },
        [SUBTRACT](context, value) {

            console.log(value);
            context.commit(SUBTRACT, value);
        },
    },
    state: {
        count: 0,
    },
    mutations: {
        [ADD](state, value) {
            console.log(state,value);
            state.count += value;
        },
        [SUBTRACT](state, value) {
            state.count -= value;
        },

    },
    getters:{
        magnify(state){
            console.log(state);
            return state.count*10;
        }
    }
}