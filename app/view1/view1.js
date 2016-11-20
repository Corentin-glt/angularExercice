'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])


.service('AuthService', ['$state', function($state) {
	this.auth=function(mail,pwd) {
		//return alert(mail +  pwd);
		$state.go('view2');
		console.log(mail + pwd);
	}	
}])

.controller('View1Ctrl', ['$scope', '$state', 'AuthService',function($scope, $state, AuthService) {
 
 	$scope.login = function(email, password) {
 		//var myEmail= email;
 		//var myPassword= password;
 		AuthService.auth($scope.email, $scope.password);
	}

}]);







