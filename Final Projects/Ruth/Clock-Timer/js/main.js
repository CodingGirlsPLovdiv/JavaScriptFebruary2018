// Variables for Clock
const clock_second_hand = $('#clock-second-hand');
const clock_minute_hand = $('#clock-minute-hand');
const clock_hour_hand = $('#clock-hour-hand');

//??


var clockstop



$("#start-clock").click(function(){
	 clockstop = setInterval(clock, 100);
});
//located within a function, therefore cannot stop?


function clock () {
	const fulldate = new Date();
const hours = fulldate.getHours();
const minutes = fulldate.getMinutes();
const seconds = fulldate.getSeconds();
	setTime(hours, minutes,seconds,"clock");
}


//alerts function to move hands with click
function setTime(hour, minute, second, device) {
	if (device == "clock") {
	$("#clock-minute-hand").css({'transform' : 'rotate(' +((6*minute) +180) + 'deg)'});

$("#clock-hour-hand").css({'transform' : 'rotate(' +((30*(hour))+180) + 'deg)'});

	$("#clock-second-hand").css({'transform' : 'rotate(' +((6*second)+180) + 'deg)'});
}
	if (device == "timer") {
		$("#timer-minute-hand").css({'transform' : 'rotate(' +((6*minute) +180) + 'deg)'});

$("#timer-hour-hand").css({'transform' : 'rotate(' +((30*(hour))+180) + 'deg)'});

	$("#timer-second-hand").css({'transform' : 'rotate(' +((6*second)+180) + 'deg)'});
	}


}

$("#stop-clock").click(function(){

	clearInterval(clockstop);
	clockstop =0 ;
});



//doesn't stop the clock




// Variables for Timer
const timer_second_hand = $('#timer-second-hand');
const timer_minute_hand = $('#timer-minute-hand');
const timer_hour_hand = $('#timer-hour-hand');

var timer_interval;

var timer_stop


var thours 
var tminutes 
var tseconds = 0

function timer () {
	tseconds = tseconds + 1;
	tminutes = (tseconds/60);
	thours = (tminutes/60);
	setTime(thours, tminutes,tseconds,"timer");
}

$("#start-timer").click(function(){
	 timer_stop = setInterval(timer, 1000);
});

$("#clear-timer").click(function(){
	tseconds = 0;
	setTime(0, 0,0,"timer");
	 clearInterval(timer_stop);
	 timer_stop =0;
	 
});

$("#stop-timer").click(function(){
	 clearInterval(timer_stop);
	 timer_stop =0;
	 
});


