/*
 * @Author: Administrator
 * @Date:   2016-02-27 11:05:24
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-03-04 23:52:06
 */

'use strict';

angular.module('messages.controller', [])
    .controller('MessagesCtrl', function($scope) {
        getSlideData();
        // 监听视图完全加载之后的时间
        $scope.$on('$ionicView.afterEnter', function(e) {
            initSlide();
        })

        // 获取滚动条数据
        function getSlideData() {
            $scope.slideData = [{
                alt: "haha1",
                src: "images/case/bigimg/case07_1.jpg"
            }, {
                alt: "haha1",
                src: "images/case/bigimg/case07_2.jpg"
            }, {
                alt: "haha1",
                src: "images/case/bigimg/case07_3.jpg"
            }];
        }

        function initSlide() {
            var mySwiper = new Swiper('.swiper-container', {
                slidesPerView: 1, // 在slider的前后各添加一张相同的slider
                paginationClickable: true, // 分页器是否可以点击
                centeredSlides: true,
                autoplay: 2700, // 多少毫秒切换页面
                autoplayDisableOnInteraction: false,
                loop: true,
                // 如果需要分页器
                pagination: '.swiper-pagination',
                // 改变自动更新
                observer: true, // 当我们修改swiper的时候，他会自动重新实例化switer
                observeParents: true

            });
        }


    });
