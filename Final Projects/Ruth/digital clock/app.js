
clockStop=0

function stop_time () {
	var clockStop = false;
}


function start_time () {
	var clockStop = true;
	setInterval(date, 10);
}


function date () {
const fulldate = new Date();
var hours = fulldate.getHours();
var minutes = fulldate.getMinutes();
var seconds = fulldate.getSeconds();
if (hours < 10 ) {
	hours = "0" +hours;
}
if (minutes < 10 ) {
	minutes = "0" +minutes;
}
if (seconds < 10 ) {
	seconds = "0" +seconds;
}
document.getElementById("sec").innerHTML=":" +seconds;
document.getElementById("min").innerHTML=minutes;
document.getElementById("hour").innerHTML=hours+":";
}

setInterval(date, 10);
	

