/* 
 * 2022/5/29 19:13
 * author: xxx
 * @description:
 */


const path = require('path');
module.exports = ({ webpack }) => {
    const viewWidth = webpack.resourcePath.includes(path.join('node_modules', 'vant')) ? 375 : 750;
    return {
        plugins: {
            autoprefixer: {},
            "postcss-px-to-viewport": {
                unitToConvert: "px",
                viewportWidth: viewWidth,
                unitPrecision: 6,
                propList: ["*"],
                viewportUnit: "vw",
                fontViewportUnit: "vw",
                selectorBlackList: [],
                minPixelValue: 1,
                mediaQuery: true,
                exclude: [],
                landscape: false
            }
        }
    }
}

