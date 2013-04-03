Lect.controller ('TeacherController', function ($scope, $location, $routeParmas, LectureModel) {
	var lectures = LectureModel.getLectures();
	$scope.lectures = lectures;

	$scope.addLecture = function() {
    $scope.lectures.push({text:$scope.lectureText, done:false});
    $scope.lectureText = '';
  };

});