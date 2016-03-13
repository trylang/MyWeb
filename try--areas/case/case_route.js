'use strict';
/*
 *创建者             郎艳萍
 *创建时间           2016.2.27
 *文件功能           app的首页
 */
angular.module('case.route', ['case.controller'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
        // 这里需要直接跳转到购物车页面
      .state('case', {
        url: '/case/:Number',
        templateUrl: 'try--areas/case/case07.html',
        controller: 'CaseCtrl'
      })

    });
