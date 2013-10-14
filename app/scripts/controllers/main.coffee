'use strict';
angularModule = angular.module 'PEMDemoApp'
angularModule.controller "MainCtrl", ($scope) ->
    $scope.lists = [
        {text:'婚姻中如何维持家庭的和谐111',id:'001'},
        {text:'如何面对平淡的生活333',id:'002'},
        {text:'如何消除婚前恐惧',id:'003'}
    ]
angularModule.controller "HunyinCtrl", ($scope) ->
    $scope.lists = [
        {text:'婚姻中如何维持家庭的和谐',id:'001'},
        {text:'如何面对平淡的生活',id:'002'},
        {text:'如何消除婚前恐惧',id:'003'}
    ]
angularModule.controller "JiatingCtrl", ($scope) ->
    $scope.lists = [
        {text:'婚姻中如何维持家庭的和谐',id:'001'},
        {text:'如何面对平淡的生活',id:'002'},
        {text:'如何消除婚前恐惧',id:'003'}
    ]
angularModule.controller "XinhunCtrl", ($scope) ->
    $scope.lists = [
        {text:'婚姻中如何维持家庭的和谐',id:'001'},
        {text:'如何面对平淡的生活',id:'002'},
        {text:'如何消除婚前恐惧',id:'003'}
    ]
angularModule.controller "ItemCtrl", ($scope,$stateParams,$http) ->
    $scope.loading = true
    oldTime = (new Date()).getTime()
    $http({
        method:"get",
        url:"views/item.json"
      })
      .success (data, status, config) ->
        console.log(new Date() - oldTime / 1000)
        $scope.loading = false
        console.log(status)
        console.log(data)
        console.log(config)
        $scope.description = data.description;
        $scope.analysis = data.analysis;
        $scope.solution = data.solution;
angularModule.controller "RenjiCtrl", ($scope) ->
    $scope.lists = [
        {text:'婚姻中如何维持家庭的和谐',id:'001'},
        {text:'如何面对平淡的生活',id:'002'},
        {text:'如何消除婚前恐惧',id:'003'}
    ]
angularModule.controller "ZhichangCtrl", ($scope) ->
    $scope.lists = [
        {text:'婚姻中如何维持家庭的和谐',id:'001'},
        {text:'如何面对平淡的生活',id:'002'},
        {text:'如何消除婚前恐惧',id:'003'}
    ]
angularModule.controller "QingshaonianCtrl", ($scope) ->
    $scope.lists = [
        {text:'婚姻中如何维持家庭的和谐',id:'001'},
        {text:'如何面对平淡的生活',id:'002'},
        {text:'如何消除婚前恐惧',id:'003'}
    ]
angularModule.controller "LianaiCtrl", ($scope) ->
    $scope.lists = [
        {text:'婚姻中如何维持家庭的和谐',id:'001'},
        {text:'如何面对平淡的生活',id:'002'},
        {text:'如何消除婚前恐惧',id:'003'}
    ]
