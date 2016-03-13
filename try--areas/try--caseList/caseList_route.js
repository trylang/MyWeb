/*
 * @Author: Administrator
 * @Date:   2016-02-27 11:00:39
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-03-04 11:01:23
 */

'use strict';

/*
 *创建者             郎艳萍
 *创建时间           2016.2.27
 *文件功能           app案例页
 */
angular.module('caseList.route', ['caseList.controller', 'caseList.service'])
    .config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
           .state('tab.caseList', {
                url: '/caseList',
                views: {
                    'tab-caseList': {
                        templateUrl: 'try--areas/try--caseList/caseList.html',
                        controller: 'CaseListCtrl'
                    }
                }
            })
    });
