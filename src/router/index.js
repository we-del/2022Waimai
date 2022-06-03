/* 
 * 2022/5/29 21:14
 * author: xxx
 * @description:
 */

import VueRouter from "vue-router";
import projectRouter from "@/router/projectRouter";
import testRouter from "@/router/testRouter";
const router = new VueRouter({
    mode:"history",
    routes: [
        ...projectRouter,
        ...testRouter,
        {
            path:"/",
            redirect:"/home"
        }

    ],
});

export default router;