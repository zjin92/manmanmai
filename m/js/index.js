$(function() {

    //初始化轮播图
    // mui('.mui-slider').slider({
    //     interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
    // });
    var slider = mui("#slider");
    slider.slider({
        interval: 5000
    });

    // 初始化区域滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
})