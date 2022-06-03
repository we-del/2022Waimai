/* 
 * 2022/5/30 11:51
 * author: xxx
 * @description:
 */

// 代理请求路径
export const BASE_URL = "http://localhost:8080";

// ele图片资源请求地址
export const ELE_URL = "https://fuss10.elemecdn.com/";

export const RoutesComputed = {
    HOME() {
        return "/home"
    },
    SEARCH() {
        return "/search"
    },
    ORDER() {
        return "/order"
    },
    YOUR_PROFILE() {
        return "/yourprofile"
    }
}
export const Routes = {
        HOME: "/home",
        SEARCH: "/search",
        ORDER: "/order",
        YOUR_PROFILE: "/yourprofile"
    }
;