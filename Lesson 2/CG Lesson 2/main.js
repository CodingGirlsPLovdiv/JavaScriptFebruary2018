// for(var i = 0; i < 10; i++) {

// 	console.log(i);
// }

// var i = 0;
// while(i < 10) {

// 	console.log(i);
// 	i++;
// }

// var answer = prompt("How old are you?");

// while(answer < 18) {

// 	alert("You need to be 18 ot more to view this content!");
// 	answer = prompt("How old are you?");
// }

// alert("NICE!");

var arr = [1,2,3,4];

for(var i = 0; i < arr.length; i++) {

	console.log("Key: " + i + ", Value: " + arr[i]);
}

//arr.length -> gets the number of elements
//arr.toString() -> output array as a string
console.log("Length of arr: " + arr.length);
console.log(arr.toString());

arr.push(5); //add element in the end
console.log("Step 1: " + arr.toString());

arr.pop(); //remove last element
console.log("Step 2: " + arr.toString());

arr.unshift(0) //add element at the beginning
console.log("Step 3: " + arr.toString());

arr.shift() //remove first element
console.log("Step 4: " + arr.toString());

var person = {
	name: "IVAN",
	age: 21,
	gender: "N/A"
}

console.log("1st way: " + person.name);
console.log("2nd way: " + person["name"]);

for(key in person) {

	console.log("Key: " + key + ", Value: " + person[key]);
}

function callMe() {

	alert("You have been called!");
}

function cl(message, times) {

	for(var i = 0; i < times; i++) {

		console.log(message);
	}
}

cl("Hello", 3);

function sum(a, b) {

	var c = a + b;
	return c;
}

cl(sum(2, 4), 1);

var number = sum(5, 10);
cl(number, 1);