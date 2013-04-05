Lect.controller('LectureController', function  ($scope, $location, $routeParams, LectureModel) {
	var lectures = LectureModel.getLectures();
	$scope.lectures = lectures;
})