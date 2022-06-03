/* 
 * 2022/5/31 14:33
 * author: xxx
 * @description:
 */

import axios from "axios";
import {BASE_URL} from "@/config";

const ajax = axios.create({baseURI: BASE_URL})
ajax.interceptors.request.use(config => {
    console.log(config);
    return config;
})

ajax.interceptors.response.use(data => {
    console.log(data);
    return data;
}, err => {
    console.log(err);
    return new Promise((resolve) => {
        resolve(err)
    });
})

export default ajax;
