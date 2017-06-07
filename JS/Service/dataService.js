app.factory('getdata', ['$http', function($http){
	return $http({
		method: 'GET',
		url:'http://localhost/Angular-Service/JS/Service/data.js'
	}).then(function successCallback(data){
			console.log(data);
			return data;
		},function(err){
			return err;
		});
	
}])