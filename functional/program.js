function duckCount(){
	
	return (function count(item, index, num){
		if (index > arguments.length) return num;

		index += 1;

		if(Object.prototype.hasOwnProperty.call(item, 'quack')){
			num += 1;
			return count(arguments[index], index, num)
		}
	})(arguments[0], 0, 0);

}

module.exports = duckCount;

