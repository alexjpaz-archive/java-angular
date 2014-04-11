angular.module('app', ['ngRoute','ngResource'])

.config(function($provide) {
	
	function AppConfig() {
	}

	$provide.provider('App', function() {
		
		// Application defaults
		// If you want to override these change the App JSON object in localStorage
		this.config = new AppConfig();
		this.config.restUrl = "/api";
		this.config.enableCORS = true;

		//TODO: do compatibility check
		if(typeof(Storage) !== void(0)) {
			console.debug("Loading Application settings from localStorage");
			var lsConfig = {};
			try {
				lsConfig = JSON.parse(localStorage.getItem('App'));
				angular.extend(this.config, lsConfig);
				console.debug(this.config, lsConfig);
			} catch(e) {
				console.error("Error loading application settings", e);
			}
		}

		this.$get = function() {
			return this; // TODO: need to return App instance so that we can hold information.
		};
	});

	$provide.factory('AppConfig', function(AppProvider) {
		return AppProvider.config;
	});
})

;
