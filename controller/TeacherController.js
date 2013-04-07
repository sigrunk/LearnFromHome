Lect.controller('TeacherController', function  ($scope, $location, $routeParams, LectureModel, CommentModel) {
	var lectures = LectureModel.getLectures();
	for (var i = 0; i < lectures.length; i++) {
		console.log('fer inn i for loop'),
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
});
