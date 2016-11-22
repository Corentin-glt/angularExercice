'use strict';

angular.module('myApp.profile',  ['ngRoute','myApp.view1','myApp.view2'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'view2/profile.html',
    controller: 'ProfileCtrl'
  });
}])

.controller('ProfileCtrl', ['$scope', '$state', 'AuthService', function($scope, $state,AuthService) {
  
  //var vm = $scope;
  //vm.name="les 3 Mousquetaires";

  $scope.email = AuthService.getEmail();
  $scope.password = AuthService.getPassword();

}]);