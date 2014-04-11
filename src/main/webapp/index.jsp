<html>
	<head>
	</head>
	<body>
		<div app='options'> </div>
		<script src='wro/lib.js'></script>
		<script src='wro/app.js?minimize=false'></script>
		<script>
			angular.module('app').run(function($inject) {
				var $rootScope = $inject.get('$rootScope');
				$rootScope.options = {
					paz: 'derp'
				};
			});
		</script>
	</body>
</html>
