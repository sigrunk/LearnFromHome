Lect.service('CommentModel',
  function() {
    this.getCommentsForLecture = function(lectureId) {
      var lecture = JSON.parse(window.localStorage.getItem(lectureId));
      if (!lecture) {
        return [];
      }
      return lecture.comments;
    };
    this.addComment = function(lectureId, commentContent) {
      var now = new Date();
      var comment = {
        content: commentContent,
        id: now
      };
      var lecture = JSON.parse(window.localStorage.getItem(lectureId));
      if (!lecture) {
        lecture = {
          id: lectureId,
          comments: []
        }
      }
      lecture.comments.push(comment);
      window.localStorage.setItem(lectureId, JSON.stringify(lecture));
    };
    this.deleteComment = function(lectureId, commentId) {
      var lecture = JSON.parse(window.localStorage.getItem(lectureId));
      if (!lecture || !lecture.comments) {
        return;
      }
      for (var i=0; i<lecture.comments.length; i++) {
        if (lecture.comments[i].id === commentId) {
          lecture.comments.splice(i, 1);
          window.localStorage.setItem(lectureId, JSON.stringify(lecture));
          return;
        }
      }
    };
  }
);
