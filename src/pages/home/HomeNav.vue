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


            <swiper-slide class="swiper_slide_item">
                <ul class="main-food-nav">
                    <li><img src="./images/nav/1.jpg" alt=""> <div>美食</div></li>
                    <li><img src="./images/nav/2.jpg" alt=""> <div>美食</div></li>
                    <li><img src="./images/nav/3.jpg" alt=""> <div>美食</div></li>
                    <li><img src="./images/nav/4.jpg" alt=""> <div>美食</div></li>
                    <li><img src="./images/nav/5.jpg" alt=""> <div>美食</div></li>
                    <li><img src="./images/nav/6.jpg" alt=""> <div>美食</div></li>
                    <li><img src="./images/nav/7.jpg" alt=""> <div>美食</div></li>
                    <li><img src="./images/nav/8.jpg" alt=""> <div>美食</div></li>
                </ul>
            </swiper-slide>
            <swiper-slide class="swiper_slide_item">
                <ul class="main-food-nav">
                    <li><img src="./images/nav/9.jpg" alt=""> <div>美食</div></li>
                    <li><img src="./images/nav/10.jpg" alt=""> <div>美食</div></li>
                    <li><img src="./images/nav/11.jpg" alt=""> <div>美食</div></li>
                    <li><img src="./images/nav/12.jpg" alt=""> <div>美食</div></li>
                    <li><img src="./images/nav/13.jpg" alt=""> <div>美食</div></li>
                    <li><img src="./images/nav/14.jpg" alt=""> <div>美食</div></li>
                </ul>
            </swiper-slide>

            <!-- 可选的控件 -->
            <!--分页器-->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

    </div>
</template>

<script>
    export default {
        name: "HomeNav",
        data() {
            return {
                //swiperOption：swiper配置项信息，需要绑定在swiper标签的 :option 属性中
                swiperOption: {
                    observer: true,
                    observeParents: true,
                    //幻灯片放映方向
                    direction: 'horizontal', //通常不与左右按钮一同使用

                    //分页器配置项
                    pagination: {
                        el: ".swiper-pagination", //分页器的类名
                        type: 'bullets', //小圆点|进度条|数字页码
                        // dynamicBullets: true,  //动态小圆点(type:'bullets'时)
                    },
                },

            };
        },

    };
</script>
<style scoped lang="stylus">
    .app-container
        margin-top 100px
    #mySwiper
        width 100vw
        height 400px
        background-color white

        .main-food-nav
            display flex
            flex-flow wrap row
            text-align center

            li
                width 25vw
                height 200px
                margin-top 10px
                img
                    height 100px
                    margin-bottom 10px
</style>