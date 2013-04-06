Lect.directive('lcCommentList', function() {
  return {
    restrict: 'A',
    templateUrl: 'view/directives/commentList.html',
    scope: {
      show: '=show',
      comments: '=comments',
      orderValue: '@orderBy',
      onDelete: '=deleteCommentHandler'
    }
  };
});