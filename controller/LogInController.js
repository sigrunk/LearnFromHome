Lect.controller('LogInController', function ($scope, $location, $routeParams) {
	$scope.logIn = function () {
		console.log('er í logIn');
		$location.path('student');
	}
});