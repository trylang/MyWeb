// 总路由模块
angular.module('route', [
        'guidePage.route',
        'tabs.route',
        'essay.route',
        'about.route',
        'caseList.route',
        'case.route',
        'messages.route',
        'account.route'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/guidePage');

    });
