/* 
 * 2022/6/1 19:33
 * author: xxx
 * @description:
 */

import {SAVE_POSITION, POSITION_STATE} from "./config";

const {ADDRESS, CITY, GEOHASH, LATITUDE, LONGITUDE, NAME} = POSITION_STATE;
export default {
    namespaced: true,
    actions: {
        [SAVE_POSITION](context, value) {
            context.commit(SAVE_POSITION, value);
        }
    },
    mutations: {
        [SAVE_POSITION](state, value) {
            for (const key in value) {
                state[key] = value[key];
            }
            state = value;
            console.log(state);
        }
    },
    state: {
        [ADDRESS]: "",
        [CITY]: "",
        [GEOHASH]: "",
        [LATITUDE]: "",
        [LONGITUDE]: "",
        [NAME]: ""
    },
    // 全局性的computed属性
    getters: {
        re() {
            return "我来返回test"
        }
    }
}
