'use strict';
angular.module('PEMDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.lists = [
      {text:'婚姻中如何维持家庭的和谐',id:'001'},
      {text:'如何面对平淡的生活',id:'002'},
      {text:'如何消除婚前恐惧',id:'003'}
    ];
  })
  .controller('HunyinCtrl', function ($scope) {
    $scope.lists = [
      {text:'11婚姻中如何维持家庭的和谐',id:'001'},
      {text:'22如何面对平淡的生活',id:'002'},
      {text:'33如何消除婚前恐惧',id:'003'}
    ];
  })
  .controller('JiatingCtrl', function ($scope) {
    $scope.lists = [
      {text:'11婚姻中如何维持家庭的和谐',id:'001'},
      {text:'22如何面对平淡的生活',id:'002'},
      {text:'33如何消除婚前恐惧',id:'003'}
    ];
  })
  .controller('XinhunCtrl', function ($scope) {
    $scope.lists = [
      {text:'11婚姻中如何维持家庭的和谐',id:'001'},
      {text:'22如何面对平淡的生活',id:'002'},
      {text:'33如何消除婚前恐惧',id:'003'}
    ];
  })
  .controller('FuqiCtrl', function ($scope) {
    $scope.lists = [
      {text:'11婚姻中如何维持家庭的和谐',id:'001'},
      {text:'22如何面对平淡的生活',id:'002'},
      {text:'33如何消除婚前恐惧',id:'003'}
    ];
  })
  .controller('ItemCtrl', function ($scope,$stateParams,$http) {
    console.log($stateParams.id)
    $scope.loading = true
    var oldTime = (new Date()).getTime()
    $http({
        method:"get",
        url:"views/item.json"
      })
      .success(function (data, status, config) {
        // body...
        console.log(new Date() - oldTime / 1000)
        $scope.loading = false
        console.log(status)
        console.log(data)
        console.log(config)
        $scope.description = data.description;
        $scope.analysis = data.analysis;
        $scope.solution = data.solution;
      })
  })
  .controller('RenjiCtrl', function ($scope) {
    $scope.lists = [
      {text:'11婚姻中如何维持家庭的和谐',id:'001'},
      {text:'22如何面对平淡的生活',id:'002'},
      {text:'33如何消除婚前恐惧',id:'003'}
    ];
  })
  .controller('ZhichangCtrl', function ($scope) {
    $scope.lists = [
      {text:'11婚姻中如何维持家庭的和谐',id:'001'},
      {text:'22如何面对平淡的生活',id:'002'},
      {text:'33如何消除婚前恐惧',id:'003'}
    ];
  })
  .controller('QingshaonianCtrl', function ($scope) {
    $scope.lists = [
      {text:'11婚姻中如何维持家庭的和谐',id:'001'},
      {text:'22如何面对平淡的生活',id:'002'},
      {text:'33如何消除婚前恐惧',id:'003'}
    ];
  })
  .controller('LianaiCtrl', function ($scope) {
    $scope.lists = [
      {text:'11婚姻中如何维持家庭的和谐',id:'001'},
      {text:'22如何面对平淡的生活',id:'002'},
      {text:'33如何消除婚前恐惧',id:'003'}
    ];
  });