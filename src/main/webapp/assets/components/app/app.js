angular.module('app').config(function(ComponentProvider) {
	ComponentProvider.register('app', {
			componentGroup: 'app',
			replace: true,
	});
});

