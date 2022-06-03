/* 
 * 2022/5/24 16:19
 * author: xxx
 * @description:
 */

const path = require("path");
module.exports={
    lintOnSave:false, // 关闭语法检查
    configureWebpack:{
        resolve:{
            extensions:[".js",".vue",".json"], // 可以省略的后缀名
            alias:{
                "@":path.resolve(__dirname,"src"), // 给src目录起别名@
                "@components":path.resolve(__dirname,"src/components") // 给components目录起别名@components
            }
        }
    },
    devServer:{
        "proxy":"http://localhost:4000"
    }
}