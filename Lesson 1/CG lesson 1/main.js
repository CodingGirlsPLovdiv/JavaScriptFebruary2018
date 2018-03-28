/*
alert('word 1');
alert("word 2");
*/

//console.log('THIS IS A CONSOLE LOG!');

document.getElementById('demo').innerHTML = 'I am a paragraph';

console.log(typeof 12);
console.log(typeof '12');
console.log(typeof true);

var a = 4;
var b = 2;

var c = a + b;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log('The value of c is: ' + c); //c is 6

c++;
console.log('The value of c is: ' + c); //c is 7
c += 1;
console.log('The value of c is: ' + c); //c is 8
c = c + 1;
console.log('The value of c is: ' + c); //c is 9

c = Math.pow(2, 3);
console.log('2 to the power of 3 is ' + c);

c = Math.sqrt(25);
console.log('The square root of 25 is ' + c);

c = Math.abs(-4);
console.log('The absolute value of -4 is ' + c);

c = Math.floor(3.43422);
console.log('The floor of 3.43422 is ' + c);

c = Math.ceil(3.43422);
console.log('The ceiling of 3.43422 is ' + c);

c = Math.round(3.43422);
console.log('3.43422 rounded is ' + c);

c = Math.round(3.67422);
console.log('3.67422 rounded is ' + c);

c = Math.random(); //a random number between 0 and 1
console.log('A random number: ' + c);

c = Math.floor(Math.random() * 10); //a random number between 0 and 10
console.log('A random number: ' + c);

/*
2 == 3  - eaqual
2 === 3
2 != 3  - not eaqual
2 > 3   - more than
2 < 3   - less than 
2 >= 3  - more or equal than
2 <= 3  - less or equal than
*/

var num1 = 2;
var num2 = 3;

/*
if(2 === 3) {

	alert('true');
} else {

	alert('false');
}
*/

/*
if(num1 == 3) {

	alert('true');
} else if(num1 == 2) {

	alert(num1);
} else {

	alert('false');
}
*/

//Ax^2 + Bx + C = 0

var A = 2;
var B = 4;
var C = 12;

var D = Math.pow(B, 2) - 4 * A * C;

if(D > 0) {

	var x1 = (-B + Math.sqrt(D))/(2 * A);
	var x2 = (-B - Math.sqrt(D))/(2 * A);

	console.log('D = ' + D);
	console.log('X1 = ' + x1);
	console.log('X2 = ' + x2);
} else if(D == 0) {

	var x = (-B)/(2 * A);

	console.log('D = ' + D);
	console.log('X = ' + x);
} else {

	console.log('D = ' + D);
	console.log('There is no such x!!1!');
}

var number = 7;

switch(number) {
	case 1:
		console.log('one');
		break;
	case 2:
		console.log('two');
		break;
	case 3:
		console.log('three');
		break;
	case 4:
		console.log('four');
		break;
	case 5:
		console.log('five');
		break;
	default:
		console.log('This number is beyond my comprehention!!1!');
		break;
}