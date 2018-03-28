	var first_name = "Zornitsa";
	var last_name = "Stoilova";
	console.log('Hello, my name is ' +first_name +' ' +last_name +'.');

	var a = prompt("a = ", a);
	var b = prompt("b = ", b);
	var c = prompt("c = ", c);

	/*var max = Math.max(a,b,c);
	if(max == a) {

	console.log('The maximum of ' +a+ ', ' +b+ ' and ' + c+ ' is: ' +max);
	
		} else if(max == b) {

	console.log('The maximum of ' +a+ ', ' +b+ ' and ' + c+ ' is: ' +max);
		} else {

	console.log('The maximum of ' +a+ ', ' +b+ ' and ' + c+ ' is: ' +max);
}*/

	var number = prompt("Enter number: ", number);
	if(number % 2) {

	console.log('The number ' +number+ ' is odd!');
	
		} else {

	console.log('The number ' +number+ ' is even!');
}

	var month = Math.floor(Math.random() * 13);
	switch(month) {
	case 1:
		console.log('January');
		break;
	case 2:
		console.log('February');
		break;
	case 3:
		console.log('March');
		break;
	case 4:
		console.log('April');
		break;
	case 5:
		console.log('May');
		break;
	case 6:
		console.log('June');
		break;
	case 7:
		console.log('July');
		break;
	case 8:
		console.log('August');
		break;
	case 9:
		console.log('September');
		break;
	case 10:
		console.log('October');
		break;
	case 11:
		console.log('November');
		break;
	case 12:
		console.log('December');
		break;
	default:
		console.log('');
		break;
}
