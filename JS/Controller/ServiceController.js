app.controller('ServiceController', ['$scope', 'getdata', function($scope, getdata){
	console.log('ServiceController');

	getdata.then(function suceessCallback(res){
		$scope.Name = res.data.Service[2].name;
		$scope.Place = res.data.Service[2].place;
	})
}])