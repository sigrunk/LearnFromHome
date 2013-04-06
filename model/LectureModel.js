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
})