Lect.service('UserModel', function() {
	this.getUser = function() {
		return[{
			id: 0,
			name: 'dabs',
			password: '1234',
			role: 'teacher'
		}, {
			id: 1,
			name: 'kennari',
			password: '1234',
			role: 'teacher'
		}, {
			id: 3,
			name: 'sigrun',
			password: 'sik',
			role: 'student'
		}, {
			id: 4,
			name: 'hilmar',
			password: 'hkh',
			role: 'student'
		}, {
			id: 5,
			name: 'gudni',
			password: 'ga',
			role: 'student'
		}]
	}
})