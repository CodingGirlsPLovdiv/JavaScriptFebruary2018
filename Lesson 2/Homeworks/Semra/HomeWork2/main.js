//Task 1 Test
console.log('\nTesting for Task 1');
console.log(factorial(1)); // Output: 1
console.log(factorial(2)); // Output: 2
console.log(factorial(5)); // Output: 120

//Task 2 Test
console.log('\nTesting for Task 2');
console.log(hasValue([1,2,3,4,5], 1)); //Output: true
console.log(hasValue([1,2,3,4,5], 5)); //Output: true
console.log(hasValue([1,2,3,4,5], 7)); //Output: false
console.log(hasValue([1,2,3,4,5], '3')); //Output: false
console.log(hasValue(['1','2','3','4','5'], '3')); //Output: true

//Task 3 Test
console.log('\nTesting for Task 3');

var person = {
	name: 'John',
	last_name: 'Doe',
	age: 26,
	alive: false,
};

outputObjectData(person);
/*
Output:
	name => John (string)
	last_name => Doe (string)
	age => 26 (number)
	alive => false (boolean)
*/

//Task 4* Tests
console.log('\nTesting for Task 4');
console.log(countDigits(4)); //Output: 1
console.log(countDigits(0)); //Output: 1
console.log(countDigits(1234567890)); //Output: 10

//Task 5* Tests
console.log('\nTesting for Task 5');
console.log(fibonacci(1)); //Output: [0]
console.log(fibonacci(2)); //Output: [0, 1]
console.log(fibonacci(10)); //Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]