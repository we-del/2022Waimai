/* 
 * 2022/5/31 14:53
 * author: xxx
 * @description:
 */

import ajax from "@/api/intercept/intercept";

/**
 @description: 获得用户当前位置
 */
const position = "24.10058,116.36867";
export const getPositionReq = () => ajax.get("position/" + position);

/**
 @description: 获得商铺列表
 */
export const getMerchantList = (obj) => ajax.get("shops", {params: {...obj}});