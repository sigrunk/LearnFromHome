Lect.controller('LectureController', function  ($scope, $location, $routeParams, LectureModel) {
	/*var lectureId = $routeParams.lectureId;*/

	var lectures = LectureModel.getLectures();
	$scope.lectures = lectures;
})



