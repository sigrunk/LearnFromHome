Lect.controller ('TeacherController', function ($scope, $location, $routeParmas, LectureModel) {
	var lectures = LectureModel.getLectures();
	$scope.lectures = lectures;

});