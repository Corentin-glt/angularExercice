'use strict';

angular.module('myApp.view2',  ['ngRoute','myApp.view1'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$state', 'AuthService', function($scope, $state,AuthService) {
  var vm = $scope;
  vm.name="les 3 Mousquetaires";

  $scope.email = AuthService.getEmail();

  $scope.home = function() {
  	$state.go('view2');
  }

  $scope.logout = function() {
  	$state.go('view1');
  }

  $scope.profile = function() {
  	$state.go('profile');
  }



}]);