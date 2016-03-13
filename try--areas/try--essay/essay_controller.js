/*
 * @Author: Administrator
 * @Date:   2016-02-27 11:02:43
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-03-01 09:32:58
 */

'use strict';

angular.module('essay.controller', [])
    .controller('EssayCtrl', function() {
        if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
            new WOW().init();
        };
    })
