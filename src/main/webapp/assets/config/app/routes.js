angular.module('app').config(function(RouteScreenProvider) {
	RouteScreenProvider.when('/test', 'test');

	RouteScreenProvider.redirect('/', '/test');
});
