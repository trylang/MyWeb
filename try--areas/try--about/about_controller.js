/*
 * @Author: Administrator
 * @Date:   2016-02-27 10:57:49
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-03-01 09:33:24
 */

'use strict';

angular.module('about.controller', [])
    .controller('AboutCtrl', function() {
        if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
            new WOW().init();
        };
    })
