<template>
    <div class="app-container">
        <!--主体为swiper标签-->
        <!--属性 :options 绑定的是data中设置的swiper配置项-->
        <!--属性 ref 用于获取该dom元素，在计算属性computed中将被调用-->
        <!--属性 id 为swiper最外层容器设置css样式-->
        <swiper :options="swiperOption" ref="mySwiper" id="mySwiper">

            <!--必须的组件-->
            <!--每页幻灯片使用swiper-slide标签-->
            <!--幻灯片组件生成的标签自带.swiper-slide的类名，但单类名选择器设置的部分css(如宽高)将被覆盖-->
            <swiper-slide class="swiper_slide_item">I'm Slide 1</swiper-slide>
            <swiper-slide class="swiper_slide_item">I'm Slide 2</swiper-slide>
            <swiper-slide class="swiper_slide_item">I'm Slide 3</swiper-slide>

            <!-- 可选的控件 -->
            <!--分页器-->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

    </div>
</template>

<script>
    export default {
        name: "SwiperTest",
        data() {
            return {
                //swiperOption：swiper配置项信息，需要绑定在swiper标签的 :option 属性中
                swiperOption: {

                    //幻灯片放映方向
                    direction: 'horizontal', //通常不与左右按钮一同使用

                    //分页器配置项
                    pagination: {
                        el: ".swiper-pagination", //分页器的类名
                        clickable: true, // 点击分页器跳切换到相应的幻灯片
                        type: 'bullets'  , //小圆点|进度条|数字页码
                        dynamicBullets: true,  //动态小圆点(type:'bullets'时)
                    },
                },
            };
        },

    };
</script>
<style>
    /*<!--容器样式-->*/
    #mySwiper{
        width: 500px;
        height: 100px;
        background-color: aquamarine;
    }
</style>
