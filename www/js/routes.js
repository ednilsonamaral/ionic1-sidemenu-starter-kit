angular
	.module('app.routes', [])
	.config(config);

function config ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'views/login.html',
			controller: 'LoginCtrl'
		})

		.state('app', {
			url: '/app',
			templateUrl: 'views/menu.html',
			controller: 'MenuCtrl'
		})

		.state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
          }
        }
    })

		$urlRouterProvider.otherwise('/login')
}
