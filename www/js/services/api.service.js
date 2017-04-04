angular
	.module('app')
	.factory('ApiService', ApiService);

function ApiService ($http, CONSTANTS) {
	var factory = {};

	factory.getExample = function (token) {
		var url = CONSTANTS.APP_API_URL + '/endpoint?token=' + token;
		// console.log(url);

		return $http({
			method: 'GET',
			url: url,
			headers: { 'Content-Type' : 'application/x-www-form-urlencoded' }
		}).then(function(data) {
			return data;
		});
	};

	factory.postExample = function (body) {
		var url = CONSTANTS.APP_API_URL + '/endpoint';
		// console.log(url);

		return $http({
			method: 'POST',
			url: url,
			headers: { 'Content-Type' : 'application/json' },
			data: body
		}).then(function(data) {
			return data;
		});
	};

	factory.putExample = function (body) {
		var url = CONSTANTS.APP_API_URL + '/endpoint';
		// console.log(url);

		return $http({
			method: 'PUT',
			url: url,
			headers: { 'Content-Type' : 'application/json' },
			data: body
		}).then(function(data) {
			return data;
		});
	};

	factory.deleteExample = function (body) {
		var url = CONSTANTS.APP_API_URL + '/endpoint';
		// console.log(url);

		return $http({
			method: 'DELETE',
			url: url,
			headers: { 'Content-Type' : 'application/json' },
			data: body
		}).then(function(data) {
			return data;
		});
	};

	return factory;
}
