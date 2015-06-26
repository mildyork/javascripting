function foo(){
	var bar = false;
	quux = 1;

	// console.log(bar);
	function zip(){
		var quux;
		bar=true;
	};

	return zip;
}

