Lect.controller('TeacherController', function  ($scope, $location, $routeParams, LectureModel) {
	var lectures = LectureModel.getLectures();
	$scope.lectures = lectures;
	$scope.selectedLectureId = $routeParams.lectureId;
})