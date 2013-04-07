Lect.controller('AddCommentController',
  function ($scope, $location, $routeParams, CommentModel) {
    var lectureId = $routeParams.lectureId;
    $scope.cancel = function() {
      $location.path('/lecture/' + lectureId);
    }
    $scope.createComment = function() {
      CommentModel.addComment(lectureId, $scope.comment.content);
      if($routeParams.isTeacher == true){
        $location.path('/teacher/' + lectureId);
        // finna út hvernig við getum nálgast is teacher úr teacher controller
      }
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