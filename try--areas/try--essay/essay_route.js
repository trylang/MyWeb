/*
 * @Author: Administrator
 * @Date:   2016-02-27 11:02:43
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-02-27 14:01:07
 */

'use strict';
/*
 *创建者             郎艳萍
 *创建时间           2016.2.27
 *文件功能           app的首页
 */
angular.module('essay.route', ['essay.controller', 'essay.service'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab.essay', {
                url: '/essay',
                views: {
                    'tab-essay': {
                        templateUrl: 'try--areas/try--essay/essay.html',
                        controller: 'EssayCtrl'
                    }
                }
            })
    });
