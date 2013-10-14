(function() {
  'use strict';
  var angularModule;

  angularModule = angular.module('PEMDemoApp');

  angularModule.controller("MainCtrl", function($scope) {
    return $scope.lists = [
      {
        text: '婚姻中如何维持家庭的和谐111',
        id: '001'
      }, {
        text: '如何面对平淡的生活333',
        id: '002'
      }, {
        text: '如何消除婚前恐惧',
        id: '003'
      }
    ];
  });

  angularModule.controller("HunyinCtrl", function($scope) {
    return $scope.lists = [
      {
        text: '婚姻中如何维持家庭的和谐',
        id: '001'
      }, {
        text: '如何面对平淡的生活',
        id: '002'
      }, {
        text: '如何消除婚前恐惧',
        id: '003'
      }
    ];
  });

  angularModule.controller("JiatingCtrl", function($scope) {
    return $scope.lists = [
      {
        text: '婚姻中如何维持家庭的和谐',
        id: '001'
      }, {
        text: '如何面对平淡的生活',
        id: '002'
      }, {
        text: '如何消除婚前恐惧',
        id: '003'
      }
    ];
  });

  angularModule.controller("XinhunCtrl", function($scope) {
    return $scope.lists = [
      {
        text: '婚姻中如何维持家庭的和谐',
        id: '001'
      }, {
        text: '如何面对平淡的生活',
        id: '002'
      }, {
        text: '如何消除婚前恐惧',
        id: '003'
      }
    ];
  });

  angularModule.controller("ItemCtrl", function($scope, $stateParams, $http) {
    var oldTime;
    $scope.loading = true;
    oldTime = (new Date()).getTime();
    return $http({
      method: "get",
      url: "views/item.json"
    }).success(function(data, status, config) {
      console.log(new Date() - oldTime / 1000);
      $scope.loading = false;
      console.log(status);
      console.log(data);
      console.log(config);
      $scope.description = data.description;
      $scope.analysis = data.analysis;
      return $scope.solution = data.solution;
    });
  });

  angularModule.controller("RenjiCtrl", function($scope) {
    return $scope.lists = [
      {
        text: '婚姻中如何维持家庭的和谐',
        id: '001'
      }, {
        text: '如何面对平淡的生活',
        id: '002'
      }, {
        text: '如何消除婚前恐惧',
        id: '003'
      }
    ];
  });

  angularModule.controller("ZhichangCtrl", function($scope) {
    return $scope.lists = [
      {
        text: '婚姻中如何维持家庭的和谐',
        id: '001'
      }, {
        text: '如何面对平淡的生活',
        id: '002'
      }, {
        text: '如何消除婚前恐惧',
        id: '003'
      }
    ];
  });

  angularModule.controller("QingshaonianCtrl", function($scope) {
    return $scope.lists = [
      {
        text: '婚姻中如何维持家庭的和谐',
        id: '001'
      }, {
        text: '如何面对平淡的生活',
        id: '002'
      }, {
        text: '如何消除婚前恐惧',
        id: '003'
      }
    ];
  });

  angularModule.controller("LianaiCtrl", function($scope) {
    return $scope.lists = [
      {
        text: '婚姻中如何维持家庭的和谐',
        id: '001'
      }, {
        text: '如何面对平淡的生活',
        id: '002'
      }, {
        text: '如何消除婚前恐惧',
        id: '003'
      }
    ];
  });

}).call(this);
