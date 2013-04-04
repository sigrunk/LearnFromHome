Lect.controller('LogInController', function ($scope, $location, $routeParams) {
	$scope.confirm = function() {
		$location.path('/student')
	}
});