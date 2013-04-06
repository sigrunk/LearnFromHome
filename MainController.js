var lectConfig = function ($routeProvider) {
	$routeProvider.when('/home', {
		controller: 'LogInController', templateUrl: 'view/logIn.html'
	}).when('/teacher', {
		controller: 'TeacherController', templateUrl: 'view/teacherView.html'
	
	}).when('/lecture/:Id', {
		controller: 'LectureController', templateUrl: 'view/lectureView.html'
	
	}).when('/createComment/:lectureId', {
      controller: 'AddCommentController', templateUrl: 'view/createComment.html'
    
	}).when('/student', {
		controller: 'StudentController', templateUrl: 'view/studentView.html'
	}).otherwise( {redirectTo: '/home'});
};

var Lect = angular.module('Lect', []).config(lectConfig);
