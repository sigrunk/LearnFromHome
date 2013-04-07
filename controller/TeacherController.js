Lect.controller('TeacherController', function  ($scope, $location, $routeParams, LectureModel, CommentModel) {
	var lectures = LectureModel.getLectures();
	for (var i = 0; i < lectures.length; i++) {
		lectures[i].comments = CommentModel.getCommentsForLecture(lectures[i].id);
	}
	$scope.lectures = lectures;
	$scope.selectedLectureId = $routeParams.lectureId;
	$scope.isTeacher = true;

	$scope.onDelete = function (commentId) {
	var confirmDelete = confirm('Are you sure you want to delete this comment?');
	if (confirm) {
		$location.path('/deleteComment/' + $routeParams.lectureId + '/' + commentId);
		}
	};

	$scope.insert = function () {
		$location.path('/addLecture');
	}

	$scope.deleteLect = function (lectureId) {
	var confirmDelete = confirm('Are you sure you want to delete this lectures?');
	if (confirm) {
		console.log('confirm i delete'),
		$location.path('/deleteLecture/' + $routeParams.lectureId);
		}
	};
});

Lect.controller('AddLectureController',
  function ($scope, $location, $routeParams, LectureModel) {
    $scope.cancel = function() {
      $location.path('/teacher');
    }
    $scope.createLecture = function() {
      LectureModel.addLecture($scope.lecture.name, $scope.lecture.date, $scope.lecture.summary, $scope.lecture.link);
      $location.path('/teacher');
    }
  }
);

Lect.controller('DeleteLectureController',
  function ($scope, $location, $routeParams, LectureModel) {
    var lectureId = $routeParams.lectureId;
    console.log('DeleteLectureController')
    LectureModel.deleteLecture(lectureId, $routeParams.lectureId);
    $scope.selectedLectureId = lectureId;
    $location.path('/teacher');
  }
);
