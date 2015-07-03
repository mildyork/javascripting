/*module.exports = function(namespace){

	function logger (argvs){
		console.log(namespace, Array.prototype.slice.call(argvs).join(" "));
	}

	return function (){
		// console.log(Array.prototype.slice.call(arguments).join(" "));
		var func = logger.bind(arguments);

		func(arguments);
	}
}*/

module.exports = function(namespace) {
	// console.log();
  return console.log.bind(console, namespace)
}