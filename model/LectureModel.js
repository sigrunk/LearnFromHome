Lect.service('LectureModel', function() {
	this.getLectures = function() {
		return[{
			id: 0,
			name: 'Fyrsti fyrirlestur'
			//name: 'http://www.youtube.com/watch?v=gdAiRnR1G78&feature=plcp'
		}, {
			id: 1,
			name: 'Annar fyrirlestur'
			//name: 'http://www.youtube.com/watch?v=F-Ds4g3vk5w'
		}]
	}
})