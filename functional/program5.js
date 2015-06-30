function checkUsersValid(goodUsers){
	return function allUsersValid(submittedUsers){
		return submittedUsers.every(function(submittedElement){
			return goodUsers.some(function(goodElement){
				return submittedElement.id === goodElement.id;
			});
		})
	}
}

module.exports = checkUsersValid;