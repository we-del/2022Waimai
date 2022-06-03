/* 
 * 2022/6/2 12:25
 * author: xxx
 * @description:
 */

import {SAVE_MERCHANT, MERCHANT_STATE} from "./config";

const {MERCHANT_MESSAGE} = MERCHANT_STATE;
export default {
    namespaced: true,
    actions: {
        [SAVE_MERCHANT](context, value) {
            context.commit(SAVE_MERCHANT, value);
        }
    },
    mutations: {
        [SAVE_MERCHANT](state, value) {
            console.log(value);
            value.forEach(merchant => state[MERCHANT_MESSAGE].push(merchant));
        }
    },
    state: {
        [MERCHANT_MESSAGE]: []
    }
}