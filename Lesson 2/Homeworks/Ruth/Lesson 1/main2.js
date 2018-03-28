
var first_name= ' Ruth';
var last_name= ' Burgess';
document.getElementById('demo').innerHTML = 'Hello, my name is' +first_name +last_name;


var number= Math.floor(Math.random()*15);
var remainder = 15%2;
if (remainder == 0) {
	console.log ("The number" +number)}
	 if (remainder != 0) {
		console.log ('This number is odd:'+number)}

		var a = Math.floor(Math.random()*12+1);
		var b = Math.floor(Math.random()*24+1);
		var c = Math.floor(Math.random()*36+1);
if (a>b&&a>c) {
	var max = a
	console.log("the maximum of" +a +b +c +max)}
	 else if (b>a&&b>c) {
		var max = b
		console.log("the maximum of" +a +b +c +max)}
	
	 else if(c>a&&c>b) {
		var max = c
		console.log("the maximum of" +a +b +c +max)}

		var month = Math.floor(Math.random()*12+1)
		switch(month) {
			case 1: 
			console.log ('January');
			break;
			case 2: 
			console.log ('February');
			break;
			case 3: 
			console.log ('March');
			break;
			case 4: 
			console.log ('April');
			break;
			case 5: 
			console.log ('May');
			break;
			case 6: 
			console.log ('June');
			break;
			case 7: 
			console.log ('July');
			break;
			case 8: 
			console.log ('August');
			break;
			case 9: 
			console.log ('September');
			break;
			case 10: 
			console.log ('October');
			break;
			case 11: 
			console.log ('November');
			break;
			case 12: 
			console.log ('December');
			break;
			default:
			console.log('uhhh');
			break;
		}
		
