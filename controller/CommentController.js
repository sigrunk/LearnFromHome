Lect.controller('AddCommentController', function ($scope, $location, $routeParams, NoteModel) {
  var lectureId = $routeParams.lectureId;
      $scope.createComment = function() {
      NoteModel.addComment(lectureId, $scope.comment.content);
      $location.path('/lecture/' + lectureId);
    }
  }
);
