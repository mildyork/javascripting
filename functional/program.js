function logger(namespace) {

	function logging(){
		console.log(namespace, arguments[0]);
	}

	return logging.apply()
}

module.exports = logger;