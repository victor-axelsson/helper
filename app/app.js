var app = angular.module('app', ['ngRoute'])
	.config(function($routeProvider){

	$routeProvider.when('/home', {
		templateUrl: 'app/components/home/homeView.html',
		controller: 'HomeCtrl'
	});

	$routeProvider.when('/texttools', {
		templateUrl: 'app/components/texttools/textView.html',
		controller: 'textCtrl'
	});

	$routeProvider.otherwise({redirectTo: '/home'}); 
}); 