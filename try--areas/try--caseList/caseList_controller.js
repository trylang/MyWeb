/*
 * @Author: Administrator
 * @Date:   2016-02-27 11:00:39
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-03-04 14:01:47
 */

'use strict';

angular.module('caseList.controller', [])
    .controller('CaseListCtrl', function($scope) {
        if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
            new WOW().init();
        };

        $scope.caseData = [{
          src:"images/case/case07_2.jpg",
          title:"历史API前进回退",
          time:"2015-9-28",
          Number:"0"
        },{
          src:"images/case/case08_2.jpg",
          title:"抽象产品对象，并做数据绑定",
          time:"2015-9-28",
          Number:"1"
        },{
          src:"images/case/case12_2.jpg",
          title:"购物车的一些业务逻辑",
          time:"2015-10-7",
          Number:"2"
        },{
          src:"images/case/case04_2.jpg",
          title:"通过解析数据跳转页面",
          time:"2015-7-7",
          Number:"3"
        },{
          src:"images/case/case17_2.jpg",
          title:"bootstrap的练习",
          time:"2015-6-18",
          Number:"4"
        },{
          src:"images/case/case01_2.jpg",
          title:"360官网使用CSS3的练习",
          time:"2015-6-18",
          Number:"5"
        }]
    })
