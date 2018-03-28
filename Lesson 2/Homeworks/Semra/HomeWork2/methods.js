//Task 1
function factorial(num) {
	if (num === 0 || num === 1)
    	return 1;
	for (var i = num - 1; i >= 1; i--) {
 		 num = num * i;
	}
	
	return num;
}

//Task 2
function hasValue(array, value) {
	for(var i = 0; i < array.length; i++) {
		if(array[i] === value) {
			return true;
		}
	}

	return false;
}

//Task 3
function outputObjectData(obj) {
	for(key in obj) {
		var value = obj[key];
		console.log(key + ' => ' + value + ' (' + typeof value + ')');
	}
}

//Task 4*
function countDigits(num){
	var digits = 0;
	if(num == 0){
		return 1;
	}
	while(num > 0){
		num=(num - num % 10) / 10;
		digits++;
	}

	return digits;
}

//Task 5*
function fibonacci(num) {

	if(num < 1) {

		return null;
	}

	switch(num) {

		case 1:
			return [0];
		case 2:
			return [0,1];
		default:
			break;
	}

	var arr = [0,1];

	for(var i = 2; i < num; i++) {

		arr.push(arr[i - 1] + arr[i - 2]);
	}

	return arr;
}