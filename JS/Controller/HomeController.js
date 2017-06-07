app.controller('HomeController', ['$scope', 'getdata', function($scope, getdata){
	console.log('HomeController');
	getdata.then(function successCallback(res){
		$scope.getData = res;
		$scope.Name = res.data.Service[0].name;
		$scope.Place = res.data.Service[0].place;
		
	})
}])