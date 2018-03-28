var first_name = "Yoana";
var last_name = "Ivanova";

console.log("Hello, my name is " + first_name + " " + last_name + "!");

var a = 2;
var b = 4;
var c = 6;

var max = Math.max(a, b, c);

console.log(max);


var a = 3;
var b = 5;
var c = 7;

// var max; 

if(a > b || a > c) {
	var max = a
} else if(b > a || b > c) {
	var max = b
} else if(c > a || c > b) {
	var max = c
}

console.log("The maximum number of " + a + ", " + b + " and " + c + " is " + max + ".");



var month = Math.floor(Math.random() *12) + 1;

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

}

// console.log(month);