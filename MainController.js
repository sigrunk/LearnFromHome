var mainConfig = function ($routeProvider) {
	$routeProvider.when('/home', {
		controller: 'LogInController', templateUrl: 'view/logIn.html'
	}).when('/teacher', {
		controller: 'TeacherController', templateUrl: 'view/teacherView.html'
	}).when('/student', {
		controller: 'StudentController', templateUrl: 'view/studentView.thml'
	}).otherwise( {redirectTo: '/home'});
};

var Main = angular.module('Main', []).config(mainConfig);
