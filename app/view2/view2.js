'use strict';

angular.module('myApp.view2',  ['ngRoute','myApp.view1','myApp.profile'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$state', 'AuthService', function($scope, $state,AuthService) {
  
  $scope.email = AuthService.getEmail();

}]);