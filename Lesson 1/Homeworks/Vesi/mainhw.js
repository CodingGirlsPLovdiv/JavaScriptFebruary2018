// Task 1
var first_name = "Vesi";
var last_name = "Zoneva";

console.log("Hello, my name is " + first_name + " " + last_name + "!");

//Task 2
var a = Math.floor(Math.random() * 100);
var b = Math.floor(Math.random() * 100);
var c = Math.floor(Math.random() * 100);

var max = a;

if(b > max) {
	max = b;
} 
if(c > max) {
	max = c;
}
console.log("The maximum number of " + a + ", " + b + " and " + c + " is " + max + ".");

//var max = Math.max(a,b); 
//console.log(Math.max(max, c));

//Task 3
var number = Math.floor(Math.random() * 100);
if(number % 2 == 0){
	console.log("The number " + number + " is even!");
}
else{
	console.log("The number " + number + " is odd!");
}

//Task 3
var random = Math.floor(Math.random() * 11 + 1);

switch(random){
	case 1 : console.log("January");break;
	case 2 : console.log("February");break;
	case 3 : console.log("March");break;
	case 4 : console.log("April");break;
	case 5 : console.log("May");break;
	case 6 : console.log("June");break;
	case 7 : console.log("July");break;
	case 8 : console.log("August");break;
	case 9 : console.log("September");break;
	case 10 : console.log("October");break;
	case 11 : console.log("November");break;
	case 12 : console.log("December");break;
	default : console.log("Number not found."); break;
}