app.controller('textCtrl', function($scope){

	console.log("in ctrl on text"); 

	$scope.replacer = {
		rules: [],
		toString: function(){
			return JSON.stringify(this);  
		}
	}; 

	$scope.export = function(){
		alert($scope.replacer.toString()); 
	}

	$scope.import = function(){
		$scope.replacer = JSON.parse($scope.importObj); 
	}

	$scope.generate = function(){
		var output = $scope.replacer.template; 


		for(var i = 0; i < $scope.replacer.rules.length; i++){
			var r = $scope.replacer.rules[i]; 

			var re = new RegExp(r.key, 'g');
			output = output.replace(re, r.value);
		}

		var lines = output.split("\n")

		for(var i = 0; i < lines.length; i++){
			lines[i] = $scope.replacer.prepend + lines[i] +  $scope.replacer.append; 
		}

		output = lines.join("\n"); 

		if($scope.replacer.useReplace){
			$scope.output = output; 
		}else{
			if(!$scope.output){
				$scope.output = ""; 
			}
			$scope.output += output + "\n"; 
		}
		
	}

	$scope.addReplacer = function(){

		if(!$scope.replacer.rules){
			$scope.replacer.rules = []; 
		}

		var rule = {
			key: $scope.replacerKey,
			value: $scope.replacerValue
		}; 

		$scope.replacer.rules.push(rule); 

		$scope.replacerKey = ""; 
		$scope.replacerValue = ""; 
	}

	$scope.removeRule = function(index){
		console.log(index); 
		$scope.replacer.rules.splice(index, 1); 
	}

}); 