{
	var first_name, last_name;
	first_name = "Klimentina";
	last_name = "Savova";
	document.getElementById('demo1').innerHTML= 
	"Hello, my name is " + first_name + " " + last_name;
}

{
	var a, b, c, max;
	a = 5;
	b = 6,
	c = 7;
	max=Math.max(a, b, c);
	document.getElementById('demo2').innerHTML= "The maximum of " + a + ", " + b + " and " + c + " is " + max;
}

{
	var x=5, y=6;
	var xtype, ytype;
	if (x %2 == 0) { xtype="even";}
	else {xtype="odd";}
	if (y %2 ==0) { ytype="even";}
	else {ytype="odd";}

	document.getElementById('demo3').innerHTML= "The number " + x + " is " + xtype + " and the number " + y+ " is " + ytype;
} 

{
	var month;
	month= Math.floor(Math.random() * 12);
	
	switch (month) {
    case 0:
        month = "January";
        break;
    case 1:
        month = "February";
        break;
    case 2:
        month = "March";
        break;
    case 3:
        month = "April";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "June";
        break;
    case 6:
        month = "July";
        break;
    case 7:
        month = "August";
        break;
    case 8:
        month = "September";
        break;
    case 9:
        month = "October";
        break;
    case 10:
        month = "November";
        break;
    case 11:
        month = "December";
        break;
    
	}
	document.getElementById('demo4').innerHTML= month;
}