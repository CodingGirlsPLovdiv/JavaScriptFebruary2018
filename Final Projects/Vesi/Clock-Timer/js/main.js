// Variables for Clock
//const clock_second_hand = $('#clock-second-hand');
//const clock_minute_hand = $('#clock-minute-hand');
//const clock_hour_hand = $('#clock-hour-hand');

var clock_interval;

// Variables for Timer
//const timer_second_hand = $('#timer-second-hand');
//const timer_minute_hand = $('#timer-minute-hand');
//const timer_hour_hand = $('#timer-hour-hand');

var timer_interval;

var timer_date = {
  hours: 0,
  minutes: 0,
  seconds: 0
};

$(document).ready(function() {

	$("#start-clock").click(function() {
	
		clock_interval = setInterval(function(){
  			var date = new Date();
  			//updateTime(date);
  			updateClock(date);
		}, 1000);

		function updateClock(date){
			var secHand = document.getElementById("clock-second-hand").style;
			var minHand = document.getElementById("clock-minute-hand").style;
			var hrHand = document.getElementById("clock-hour-hand").style;

			secHand.transform = "rotate(" + (date.getSeconds()*6+180) + "deg)";
			minHand.transform = "rotate(" + (date.getMinutes()*6+180) + "deg)";
			hrHand.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5 + 180) + "deg)";
		}

		/*function updateTime(date){
  			console.log(date);
		}*/

		$("#stop-clock").click(function() {

			clearInterval(clock_interval);

		});

	});

	$("#start-timer").click(function() {

		timer_interval = setInterval(function(){
			//console.log("interval activated");
			updateTimer();

		}, 1000);

		function updateTimer(){
			var secHand = document.getElementById("timer-second-hand").style;
			var minHand = document.getElementById("timer-minute-hand").style;
			var hrHand = document.getElementById("timer-hour-hand").style;

			timer_date.seconds++;
			if(timer_date.seconds % 60 == 0){
				timer_date.minutes++;
			}
			if(timer_date.minutes % 60 == 0 && timer_date.minutes > 0){
				timer_date.hours++;
			}
			
			secHand.transform = "rotate(" + (6*timer_date.seconds + 180) + "deg)";
			minHand.transform = "rotate(" + (6*timer_date.minutes + 180) + "deg)";
			hrHand.transform = "rotate(" + (timer_date.hours*30 + timer_date.minutes*0.5 + 180) + "deg)";

		}

		$("#stop-timer").click(function(){

			clearInterval(timer_interval);

		});	

	});

	$("#clear-timer").click(function() {

			var secHand = document.getElementById("timer-second-hand").style;
			var minHand = document.getElementById("timer-minute-hand").style;
			var hrHand = document.getElementById("timer-hour-hand").style;

			timer_date.seconds = 0;
			timer_date.minutes = 0;
			timer_date.hours = 0;
			
			secHand.transform = "rotate(" + 180 + "deg)";
			minHand.transform = "rotate(" + 180 + "deg)";
			hrHand.transform = "rotate(" + 180 + "deg)";

		});

});