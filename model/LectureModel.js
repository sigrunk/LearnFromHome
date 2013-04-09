Lect.service('LectureModel', function ($http) {
 	this.getLectures = function() {
		return[{
			id: 1,
			name: 'Fyrsti fyrirlestur',
			link: 'v=gdAiRnR1G78',
			summary: 'This is a lecture about very interesing subject...'
		}, {
			id: 2,
			name: 'Annar fyrirlestur',
			link: 'v=F-Ds4g3vk5w',
			summary: 'This is a lecture about almoust nothing interesing t...'
		}]
    /*
    Þetta er tilraun okkar við að tengjast REST þjónustunni. Lentum í cross side server villu
    $http.get('http://lectureapi.isproject.is/lectures/lecture').success(function(data) {
      //$scope.courses = data;
      console.log(data);
    });*/
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
      /* skila sér til baka úr view. Þarf að útfæra þannig að þetta fari í grunninn. '
        Tókum ákvörðun um að útfæra þetta ekki í local storage líkt og comment þar
        sem við sáum að þetta var að skila sér (með console.log) úr forminu inn í modelið
      */


    };
    this.deleteLecture = function(lectureId) {
      console.log('erum í delete lecture')
      /* Ekki útfært því við vorum ekki búin að útfæra addLecture.
         þetta átti að virka með REST þjónustunni. */
    };
})