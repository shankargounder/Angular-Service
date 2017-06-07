app.factory('getdata', ['$http', function($http){
	return
		$http.get('JS/Service/data.js').success(function(data){
			return data;
		}).error(function(err){
			return err;
		})
	
}])