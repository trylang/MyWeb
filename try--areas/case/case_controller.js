/*
 * @Author: Administrator
 * @Date:   2016-02-27 11:02:43
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-03-04 14:28:06
 */

'use strict';

angular.module('case.controller', [])
    .controller('CaseCtrl', function($scope,$stateParams) {
        if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
            new WOW().init();
        };

        var num = $stateParams.Number;
        console.log(typeof(num));

        var caseList = [{
          src:"images/case/bigimg/case07_1.png",
          title:"历史API前进回退",
          time:"2015-9-28",
          des:"概述：这里用到的HTML5中的新属性histroy.用到两个知识点。1.解析Json数据，使地址栏动态生成对应标题，且可以回退。"
        },{
          src:"images/case/bigimg/case10_1.png",
          title:"抽象产品对象，并做数据绑定",
          time:"2015-9-28",
          des:`这个网站是应用面向对象的思想，抽象出一个product对象，添加属性跟方法，简单做的一个数据绑定。模拟后台传过来的Json数据，在抽象好的方法中使用豆豆加加的方式，将其数据绑定。在页面加载的时候，将其实例化，并调用绑定方法。`
        },{
          src:"images/case/bigimg/case12_1.png",
          title:"购物车的一些业务逻辑",
          time:"2015-10-7",
          des:`"这个页面涉及到的是，面向对象--购物车方面的业务逻辑。
          比如：幻灯片图片的绑定、购物车增加、产品个数随之增加，
          总数价格同步变化等业务。开始做的时候出错很多次，
          业务逻辑要求挺高的啊。慢慢来。(∩_∩)嘿嘿~(∩_∩)"`
        },{
          src:"images/case/bigimg/case15_1.png",
          title:"通过解析数据跳转页面",
          time:"2015-7-7",
          des:`"这个案例主要用到的知识点是解析Json数据，第二个知识点是通过window.location.search解析地址栏"?"号后面的信息，使用window.location做跳转页面，因为只是想练习下数据的传输绑定，就没写样式。嘿嘿，有些难看。。。"`
        },{
          src:"images/case/bigimg/case18_1.png",
          title:"bootstrap的练习",
          time:"2015-6-18",
         des:`"这是学习bootstrap库做的练习，需要不同屏幕做适配心得：既要达到利用库实现效果最大化，还不能破坏库的源代码，不利于代码优化和维护。"`
        },{
          src:"images/case/bigimg/case04_1.png",
          title:"360官网使用CSS3的练习",
          time:"2015-6-18",
          des:`"这里用到的主要是CSS的transition属性。
            1）首屏：由margin从大到小，透明度由0到1的过渡；
            2）第二屏：是开始rotate由零散到归整的过渡；
            3）三，四屏：是通过开始定位到不可见处，过渡到指定位置；
            4）尾屏：定位到不可见处和宽或高为零过渡效果。"`
        }];
         $scope.data = {
          src: caseList[num].src,
          title:caseList[num].title,
          time:caseList[num].time,
          des:caseList[num].des
        }
        console.log($scope.data);
        console.log(caseList);


    })
