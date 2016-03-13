'use strict';

/*
 *创建者             郎艳萍
 *创建时间           2016.2.27
 *文件功能           app的首页
 */
angular.module('messages.route', ['messages.controller', 'messages.service'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab.messages', {
                url: '/messages',
                views: {
                    'tab-messages': {
                        templateUrl: 'try--areas/try--messages/messages.html',
                        controller: 'MessagesCtrl'
                    }
                }
            })

        $stateProvider
        // 这里需要直接跳转到购物车页面
            .state('messages', {
            url: '/messages',
            templateUrl: 'try--areas/try--messages/messages.html',
            controller: 'MessagesCtrl'
        })

    });
