app.controller('ContactController', ['$scope', 'getdata', function($scope, getdata){
	console.log('ContactController');

	getdata.then(function suceessCallback(res){
		$scope.Name = res.data.Service[1].name;
		$scope.Place = res.data.Service[1].place;
	})
}])