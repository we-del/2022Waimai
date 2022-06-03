/* 
 * 2022/5/30 19:04
 * author: xxx
 * @description:
 */

import Home from "@/pages/home/Home";
import Search from "@/pages/search/Search";
import YourProfile from "@/pages/yourProfile/YourProfile";
import Order from "@/pages/order/Order";

export default [
    {
        name: "home",
        path: "/home",
        component: Home
    },
    {
        name: "search",
        path: "/search",
        component: Search
    },
    {
        name: "yourprofile",
        path: "/yourprofile",
        component: YourProfile,
    },
    {
        name: "order",
        path: "/order",
        component: Order
    },
]