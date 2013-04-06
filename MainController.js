var lectConfig = function ($routeProvider) {
	$routeProvider.when('/home', {
		controller: 'LogInController', templateUrl: 'view/logIn.html'
<<<<<<< HEAD
	}).when('/teacher', {
		controller: 'TeacherController', templateUrl: 'view/teacherView.html'
	}).when('/lecture/:lectureId', {
		controller: 'TeacherController', templateUrl: 'view/lectureView.html'
=======
	}).when('/lecture', {
		controller: 'LectureController', templateUrl: 'view/lecture.html'
	
	}).when('/lecture/:lectureId', {
		controller: 'LectureController', templateUrl: 'view/lecture.html'
	
	}).when('/addComment/:lectureId', {
      controller: 'AddCommentController', templateUrl: 'view/addComment.html'
    
    }).when('/deleteComment/:lectureId/:commentId', {
      controller: 'DeleteCommentController', templateUrl: 'view/addComment.html'
   
>>>>>>> origin/SikLearn
	}).when('/student', {
		controller: 'StudentController', templateUrl: 'view/studentView.html'
	}).otherwise( {redirectTo: '/home'});
};

var Lect = angular.module('Lect', []).config(lectConfig);
