Lect.controller('AddCommentController',
  function ($scope, $location, $routeParams, CommentModel) {
    var lectureId = $routeParams.lectureId;
    $scope.cancel = function() {
      $location.path('/lecture/' + lectureId);
    }
    $scope.createComment = function() {
      CommentModel.addComment(lectureId, $scope.comment.content);
      $location.path('/lecture/' + lectureId);
    }
  }
);

Lect.controller('DeleteCommentController',
  function ($scope, $location, $routeParams, CommentModel) {
    var lectureId = $routeParams.lectureId;
    CommentModel.deleteComment(lectureId, $routeParams.commentId);
    $scope.selectedLectureId = lectureId;
    $location.path('/lecture/' + lectureId);
  }
);