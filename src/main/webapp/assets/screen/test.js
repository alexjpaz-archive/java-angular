angular.module('app').config(function(ScreenProvider) {
	console.debug('apaz(1)');
	ScreenProvider.register('screen-test', {
			controller: function($scope) {
				$scope.lol = '2';
			}
	});
});
