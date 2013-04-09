Lect.service('LectureModel', function($http) {
	this.getLectures = function() {
		/*return[{
			id: 1,
			name: 'Fyrsti fyrirlestur',
			link: 'http://www.youtube.com/watch?v=gdAiRnR1G78&feature=plcp',
			summary: 'This is a lecture about very interesing subject...'
		}, {
			id: 2,
			name: 'Annar fyrirlestur',
			link: 'http://www.youtube.com/watch?v=F-Ds4g3vk5w',
			summary: 'This is a lecture about almoust nothing interesing t...'
		}]*/
    $http.get('http://lectureapi.isproject.is/lectures/lecture').success(function(data) {
      //$scope.courses = data;
      console.log(data);
    });
	}


	this.addLecture = function(lecture_name, lecture_date, abstract, youtube) {
      var now = new Date();
      var lecture = {
        name: lecture_name,
        date: lecture_date,
        summary: abstract,
        link: youtube,
        id: now
      };

      console.log(lecture.name + lecture.date, lecture.summary, lecture.link);
      // skila sér til baka úr view. Þarf að útfæra þannig að þetta fari í grunninn.
    };
    this.deleteLecture = function(lectureId) {
      /*var lecture = JSON.parse(window.localStorage.getItem(lectureId));
      if (!lecture || !lecture.comments) {
        return;
      }
      for (var i=0; i<lecture.comments.length; i++) {
        if (lecture.comments[i].id === commentId) {
          lecture.comments.splice(i, 1);
          window.localStorage.setItem(lectureId, JSON.stringify(lecture));
          return;
        }
      }*/
      console.log('erum í delete lecture')
    };
})