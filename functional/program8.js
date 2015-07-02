/*function duckCount(){
	
	var argvs = Array.prototype.slice.call(arguments);

	var a = argvs.filter(function(item, index){
		return Object.prototype.hasOwnProperty.call(item, 'quack');
	});

	return a.length;

}

module.exports = duckCount;*/

function duckCount(){
	
	console.log(arguments.length);
	var argvs = Array.prototype.slice.call(arguments);
	
	return (function count(index, num){

		
		if (index+1 > argvs.length) return num;

		if(Object.prototype.hasOwnProperty.call(argvs[index], 'quack')){
			
			num += 1;
		}

		return count(index+1, num);


	})(0, 0);

}

module.exports = duckCount;



