// tab功能路由
angular.module('tabs.route', ['tabs.controller'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
        // setup an abstract state for the tabs directive
            .state('tab', {
            url: '/tabs',
            abstract: true,
            templateUrl: 'try--areas/tabs/tabs.html',
            controller: 'TabsCtrl'
        })


    });
