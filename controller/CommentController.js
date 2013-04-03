Lect.controller('AddCommentController', function ($scope, $location, $routeParams, NoteModel) {
  var videoId = $routeParams.videoId;
      $scope.createComment = function() {
      NoteModel.addComment(videoId, $scope.comment.content);
      $location.path('/video/' + videoId);
    }
  }
);
