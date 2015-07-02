var slice = Array.prototype.slice;

function logger(namespace) {

	return function logging(){
		Function.prototype.apply(logging, namespace);
		console.log(slice.call(arguments));
		// console.log(namespace);
	}

	
}

module.exports = logger;