Lect.controller('LectureController', function  ($scope, $location, $routeParams, LectureModel, CommentModel) {
var lectures = LectureModel.getLectures();
for (var i = 0; i < lectures.length; i++) {
lectures[i].comments = CommentModel.getCommentsForLecture(lectures[i].id);
}
$scope.lectures = lectures;
$scope.selectedLectureId = $routeParams.lectureId;

$scope.onDelete = function (commentId) {
var confirmDelete = confirm('Are you sure you want to delete this comment?');
if (confirm) {
$location.path('/deleteComment/' + $routeParams.lectureId + '/' + commentId);
}
};
});



