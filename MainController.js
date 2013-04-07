var lectConfig = function ($routeProvider) {
	$routeProvider.when('/home', {
		controller: 'LogInController', templateUrl: 'view/logIn.html'

	}).when('/lecture', {
		controller: 'LectureController', templateUrl: 'view/lecture.html'
	
	}).when('/addLecture', {
		controller: 'LectureController', templateUrl: 'view/addLecture.html'
	
	}).when('/lecture/:lectureId', {
		controller: 'LectureController', templateUrl: 'view/lecture.html'
	
	}).when('/addComment/:lectureId', {
      controller: 'AddCommentController', templateUrl: 'view/addComment.html'
    
    }).when('/deleteComment/:lectureId/:commentId', {
      controller: 'DeleteCommentController', templateUrl: 'view/addComment.html'
   
	}).when('/teacher', {
		controller: 'TeacherController', templateUrl: 'view/lecture.html'
	}).otherwise( {redirectTo: '/home'});
};

var Lect = angular.module('Lect', []).config(lectConfig);
