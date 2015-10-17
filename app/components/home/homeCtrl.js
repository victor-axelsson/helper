app.controller('HomeCtrl', function($scope, $location){

	$scope.navigate = function(url){
		$location.path(url); 
	} 
}); 