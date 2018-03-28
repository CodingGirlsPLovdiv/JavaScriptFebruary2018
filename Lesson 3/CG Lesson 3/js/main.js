$(document).ready(function() {

	//$(SELECTOR).doSomething();

	// anything to number -> var num = Number(str);
	// anything to string -> var str = num.toString();

	$('#div-1 #first').click(function() {

		$(this).fadeOut(400).fadeIn(400);
	});

	$('#div-1 .last').click(function() {

		$(this).fadeOut(400).fadeIn(400);
	});

	$('#div-2 #swap').click(function() {

		var text_1 = $('#div-2 #one').text();
		var text_2 = $('#div-2 #two').text();

		$('#div-2 #one').text(text_2);
		$('#div-2 #two').text(text_1);
	});

	$('#div-3 #sum').click(function() {

		var number_1 = Number($('#div-3 #num-one').val());
		var number_2 = Number($('#div-3 #num-two').val());

		var sum = number_1 + number_2;

		$('#div-3 #result').text('Result: ' + sum);

		$('#div-3 #num-one').val('');
		$('#div-3 #num-two').val('');
	});

	$('#div-4 #fix').click(function() {

		$('#div-4 p').each(function() {

			var paragraph_color = $(this).attr('class');

			//$(this).css('color', paragraph_color);
			$(this).css({
			
				'color': paragraph_color, 
				'fontSize': '20px'
			});
		});
	});

	$('#div-5 #before').click(function() {

		var htmlToAdd = '<p>I am before the ALFA</p>';

		$('#div-5 #content').prepend(htmlToAdd);
	});

	$('#div-5 #after').click(function() {

		var htmlToAdd = '<p>I am after the ALFA</p>';

		$('#div-5 #content').append(htmlToAdd);
	});

	$('#div-6 #del').click(function() {

		var paragraphs = $('#div-6 p');

		var length = paragraphs.length;

		var random = Math.floor(Math.random() * (length - 1));

		paragraphs.eq(random).remove();
	});

	$('#div-8 #animate').click(function() {

		$('#div-8 #square').animate({

			'width': '200px',
			'height': '200px'
		}, 2000, function() {

			$('#div-8 #square').animate({

			'width': '100px',
			'height': '100px'
		}, 2000);
		});
	});
});