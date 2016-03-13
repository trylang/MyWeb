/*
 * @Author: Administrator
 * @Date:   2016-02-27 10:57:49
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-02-27 14:18:28
 */

'use strict';

angular.module('about.route', ['about.controller', 'about.service'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab.about', {
                url: '/about',
                views: {
                    'tab-about': {
                        templateUrl: 'try--areas/try--about/about.html',
                        controller: 'AboutCtrl'
                    }
                }
            })
    });
