var lectConfig = function ($routeProvider) {
	$routeProvider/*.when('/home', {
		controller: 'LogInController', templateUrl: 'view/logIn.html'
	})*/.when('/home', {
		controller: 'TeacherController', templateUrl: 'view/teacherView.html'
	})/*.when('/lecture/:lectureId', {
		controller: 'TeacherController', templateUrl: 'view/teacherView.html'
	}).when('/student', {
		controller: 'StudentController', templateUrl: 'view/studentView.thml'
	})*/.otherwise( {redirectTo: '/home'});
};

var Lect = angular.module('Lect', []).config(lectConfig);
