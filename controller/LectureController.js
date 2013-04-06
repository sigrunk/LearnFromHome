Lect.controller('LectureController', function  ($scope, $location, $routeParams, LectureModel, CommentModel) {
var lectures = LectureModel.getLectures();
for (var i = 0; i < lectures.length; i++) {
lectures[i].comments = CommentModel.getCommentsForLecture(lectures[i].id);
}
$scope.lectures = lectures;
$scope.selectedLectureId = $routeParams.lectureId;

$scope.onDelete = function (commentId) {
var confirmDelete = confrim('Are you sure you want to delete this comment?');
if (confrim) {
$location.path('/deleteComment/' + $routeParams.lectureId + '/' + commentId);
}
};
});



