Lect.service('LectureModel', function() {
	this.getLectures = function() {
		return[{
			id: 1,
			name: 'Fyrsti fyrirlestur',
			link: 'http://www.youtube.com/watch?v=gdAiRnR1G78&feature=plcp',
			summary: 'This is a lecture about very interesing subject...'
		}, {
			id: 2,
			name: 'Annar fyrirlestur',
			link: 'http://www.youtube.com/watch?v=F-Ds4g3vk5w',
			summary: 'This is a lecture about almoust nothing interesing t...'
		}]
	}

	this.addLecture = function(lecture_name, lecture_date, abstract, youtube) {
      var now = new Date();
      var lecture = {
        name: lecture_name,
        //date: lecture_date,
        summary: abstract,
        link: youtube,
        id: now
      };
      //var lecture = JSON.parse(window.localStorage.getItem());
      /*if (!lecture) {
        lecture = {
          id: lectureId,
          lecture: []
        }
      }*/
      lecture.push(lecture);
      window.localStorage.setItem(JSON.stringify(lecture));
    };
})