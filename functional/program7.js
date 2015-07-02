function reduce(arr, fn, initial){

	return (function reduceOne(index, results){
		if (index+1 > arr.length) return results;

		return reduceOne(index+1, fn(results, arr[index], index, arr));
	})(0, initial);

}

module.exports = reduce;

/*function reduce(arr, fn, initial) {
	console.log(initial);
	if (!arr.length) return initial;
	return reduce(arr.slice(1), fn, fn(initial, arr[0]));
}*/



