/* 
 * 2022/5/29 21:14
 * author: xxx
 * @description:
 */

import VueRouter from "vue-router";

import Home from "../pages/Home";
import Search from "../pages/Search";
import YourProfile from "../pages/YourProfile";
import Order from "../pages/Order";
const router = new VueRouter({
    mode:"history",
    routes: [
        {
            name:"home",
            path: "/home",
            component: Home
        },
        {
            name:"search",
            path:"/search",
            component: Search
        },
        {
            name:"yourprofile",
            path:"/yourprofile",
            component: YourProfile,
        },
        {
            name:"order",
            path: "/order",
            component: Order
        },
        {
            path:"/",
            redirect:"/home"
        }

    ],
});

export default router;