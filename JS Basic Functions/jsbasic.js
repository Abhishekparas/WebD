function isEven(num){
	if (num %2 == 0) {
		return true;
	}
	return false;
}

 var factorial = function(x){
	if(x === 0){
		return 1;
	}

	var m = x* factorial(x-1);
	return m;
}

function kebabToSnake(str){
	var newStr = str.replace(/-/g,"_");
	return newStr;
}