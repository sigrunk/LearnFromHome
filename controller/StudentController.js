Lect.controller('StudentController', function  ($scope, $location, $routeParams, LectureModel) {
	var lectures = LectureModel.getLectures();
	$scope.lectures = lectures;
})