angular
	.module('app', [
		'ionic',
		'ngCordova',
		'app.routes'
	])

	.run(function () {
	   if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);
	   }

	   if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
	   }

		if (window.cordova && window.cordova.InAppBrowser) {
			window.open = window.cordova.InAppBrowser.open;
		}
	})

	// Configurações necesárias para consumo da API
	.constant('CONSTANTS', {
			'APP_API_URL': 'http://localhost:8789/api/v1',
	})
