'use strict';

angular.module('myApp.view2',  ['ngRoute','myApp.view1'])

/*.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/profile.html',
    controller: 'ProfileCtrl'
  });
}])*/

.controller('ProfileCtrl', ['$scope', '$state', 'AuthService', function($scope, $state,AuthService) {
  var vm = $scope;
  vm.name="les 3 Mousquetaires";

  $scope.email = AuthService.getEmail();


}]);