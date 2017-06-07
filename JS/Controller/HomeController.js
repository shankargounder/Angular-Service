app.controller('HomeController', ['$scope', 'getdata' function($scope, getdata){
	console.log('HomeController');
	getdata.success(function(data){
		$scope.getData = data;
		console.log($scope.getData);
	})
}])