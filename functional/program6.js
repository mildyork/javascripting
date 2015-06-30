function countWords(inputWords){
	
	return inputWords.reduce(function(prev, current, index, array){
		
		!!prev[current] ? prev[current] +=1 : prev[current] = 1;
		
		return prev;
	}, {});

}

// var input = [ 'aliquip', 'nulla', 'deserunt', 'nostrud', 'velit', 'elit', 'fugiat', 'labore', 'occaecat', 'adipisicing', 'ullamco', 'veniam', 'non', 'mollit', 'do', 'consectetur', 'qui', 'veniam', 'pariatur', 'et', 'enim', 'laboris', 'irure', 'magna', 'nulla', 'voluptate', 'fugiat', 'mollit' ];

// console.log(countWords(input));

module.exports = countWords;