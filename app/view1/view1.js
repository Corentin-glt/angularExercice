'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])


.service('AuthService', ['$state', function($state) {
	
	var currentEmailUser;
	var currentPwdUser;
	var users = [
		{email:'coco@co.co', password:'coco'},
		{email:'jeje@je.jo', password:'jeje'},
		{email:'jojo@jo.jo', password:'jojo'}
	];


	this.auth=function(mail,pwd) {	
		var i = 0;
		console.log(mail);
		for(var elem in users){
			console.log();
			if(mail == users[elem].email && pwd == users[elem].password){
				currentEmailUser = mail;
				currentPwdUser = pwd;
				i++;		
			} 	
		}
		if (i>0){
			$state.go('view2');
		}
		else {
			alert("Email or password incorrect, try again!");
		}	
	}

	this.getEmail = function (){
		return currentEmailUser;
	}

	this.getPassword = function () {
		return currentPwdUser;
	}
}])

.controller('View1Ctrl', ['$scope', '$state', 'AuthService',function($scope, $state, AuthService) {
 
 	$scope.login = function(email, password) {
 		//$scope.email= email;
 		//$scope.password= password;
 		//var myPassword= password;
 		AuthService.auth(email, password);
	}

}]);







