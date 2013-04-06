Lect.controller('LogInController', function ($scope, $location, $routeParams, UserModel) {
	
	$scope.confirm = function() {
		var users = UserModel.getUser();
		for (var i = 0; i < users.length; i++) {
			if (users[i].name === $scope.user.name) {
				console.log(users[i].name),
				console.log(users[i].password),
				console.log(users[i].role)

				//$location.path('/student')
				if (users[i].password === $scope.user.password) {
					if (users[i].role === 'student') {
						$location.path('/student')
						console.log('er i confirm')
					}
					else {
						$location.path('/lecture')
					};
				}
				else{
					$location.path('/home')
				};
				return 0;
			}
			else{
				console.log('else'),
				$location.path('/home')
			};
		}
		//$location.path('/home')
	}
});