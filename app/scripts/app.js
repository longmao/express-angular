'use strict';

// Make sure to include the `ui.router` module as a dependency
angular.module('PEMDemoApp', ['ui.router'])
    .run(
      [        '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {

        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class='{ active: $state.includes('contacts.list') }'> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

      }]);
angular.module('PEMDemoApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, send to /
    $urlRouterProvider
      .otherwise('/');
    $stateProvider
      .state('home', {
        url:'/',
        templateUrl: 'views/main.html',
        controller:'MainCtrl',
        title:"首页"
      })
      .state('hunyin',{
        url:'/hunyin',
        templateUrl: 'views/hunyin.html',
        controller:'HunyinCtrl',
        title:'婚姻家庭'
      })
      .state('hunyin.xinhun',{
        url:'/xinhun',
        templateUrl: 'views/xinhun.html',
        controller:'XinhunCtrl',
        title:'新婚'
      })
      .state('hunyin.fuqi',{
        url:'/fuqi',
        templateUrl: 'views/fuqi.html',
        controller:'FuqiCtrl',
        title:'夫妻相处'
      })
      .state('hunyin.jiating',{
        url:'/jiating',
        templateUrl: 'views/jiating.html',
        controller:'JiatingCtrl',
        title:'家庭关系'
      })
      .state('lianai',{
        url:'/lianai',
        templateUrl: 'views/lianai.html',
        controller:'LianaiCtrl',
        title:'恋爱交友'
      })
      .state('qingshaonian',{
        url:'/qingshaonian',
        templateUrl: 'views/qingshaonian.html',
        controller:'QingshaonianCtrl',
        title:'青少年教育'
      })
      .state('zhichang',{
        url:'/zhichang',
        templateUrl: 'views/zhichang.html',
        controller:'ZhichangCtrl',
        title:'职场问题'
      })
      .state('renji',{
        url:'/renji',
        templateUrl: 'views/renji.html',
        controller:'RenjiCtrl',
        title:'人际交往'
      })
      .state('item',{
        url:'/item/:id',
        templateUrl: 'views/item.html',
        controller:'ItemCtrl'
      });
      //$locationProvider.html5Mode(true);
  });


