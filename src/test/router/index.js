/* 
 * 2022/5/28 14:29
 * author: xxx
 * @description:
 */

import VueRouter from "vue-router";
import First from "./First";
import Last from "./Last";
import Ope from "./Ope";

const router  =new VueRouter({
    mode:"history",
    routes:[
        {
            path:"/",
            redirect:"/first"
        },
        {
            path: "/first",
            component: First,
        },
        {
            path:"/last",
            component:Last
        },
        {
            name:"ope",
            path:"/:id",
            component: Ope,
            props($route){
                console.log($route);
            }
        }
    ],
});
router.beforeEach((to,from,next)=>{
    console.log(to,from);
    next();
});
router.afterEach((to,from)=>{
    console.log(to,from);
});
export default router;