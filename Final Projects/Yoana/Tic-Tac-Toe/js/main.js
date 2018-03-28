var playerSign = 'x';
var turn = 0;
var gameEnded = false;
var winner = 0;

var matrix = [

	[0,0,0],
	[0,0,0],
	[0,0,0]
];

$(document).ready(function() {


$('.container #game .field').click(function() {
	
	if(gameEnded == false)
	{
		
		if( ($(this).text()) != 'x' && ($(this).text()) != 'o')
 		{
			if(turn % 2 == 1) playerSign = 'o';
				else playerSign = 'x';

			$(this).addClass(playerSign);
			$(this).text(playerSign);
		

			var liid = $(this).attr('id');

			if(liid == '0,0') matrix[0][0] = playerSign;
			else if(liid == '0,1') matrix[0][1] = playerSign;
			else if(liid == '0,2') matrix[0][2] = playerSign;
			else if(liid == '1,0') matrix[1][0] = playerSign;
			else if(liid == '1,1') matrix[1][1] = playerSign;
			else if(liid == '1,2') matrix[1][2] = playerSign;
			else if(liid == '2,0') matrix[2][0] = playerSign;
			else if(liid == '2,1') matrix[2][1] = playerSign;
			else if(liid == '2,2') matrix[2][2] = playerSign;

			checkWinner();

			turn = turn + 1;
			
		}
	
	}
});



function checkWinner()
{
	


		 if(matrix[0][0] == 'x' && matrix[0][1] == 'x' && matrix[0][2] == 'x') winner = 1;
	else if(matrix[1][0] == 'x' && matrix[1][1] == 'x' && matrix[1][2] == 'x') winner = 1;
	else if(matrix[2][0] == 'x' && matrix[2][1] == 'x' && matrix[2][2] == 'x') winner = 1;

	else if(matrix[0][0] == 'x' && matrix[1][0] == 'x' && matrix[2][0] == 'x') winner = 1;
	else if(matrix[0][1] == 'x' && matrix[1][1] == 'x' && matrix[2][1] == 'x') winner = 1;
	else if(matrix[0][2] == 'x' && matrix[1][2] == 'x' && matrix[2][2] == 'x') winner = 1;

	else if(matrix[0][0] == 'x' && matrix[1][1] == 'x' && matrix[2][2] == 'x') winner = 1;
	else if(matrix[0][2] == 'x' && matrix[1][1] == 'x' && matrix[2][0] == 'x') winner = 1;

	 
	
	else if(matrix[0][0] == 'o' && matrix[0][1] == 'o' && matrix[0][2] == 'o') winner = 2;
	else if(matrix[1][0] == 'o' && matrix[1][1] == 'o' && matrix[1][2] == 'o') winner = 2;
	else if(matrix[2][0] == 'o' && matrix[2][1] == 'o' && matrix[2][2] == 'o') winner = 2;
	
	else if(matrix[0][0] == 'o' && matrix[1][0] == 'o' && matrix[2][0] == 'o') winner = 2;
	else if(matrix[0][1] == 'o' && matrix[1][1] == 'o' && matrix[2][1] == 'o') winner = 2;
	else if(matrix[0][2] == 'o' && matrix[1][2] == 'o' && matrix[2][2] == 'o') winner = 2;
	
	else if(matrix[0][0] == 'o' && matrix[1][1] == 'o' && matrix[2][2] == 'o') winner = 2;
	else if(matrix[0][2] == 'o' && matrix[1][1] == 'o' && matrix[2][0] == 'o') winner = 2;
 	
 	if(winner == 1)
 		{ $('#game-messages .player-x-win').show(); gameEnded = true;}
 	else if(winner == 2)
 		{ $('#game-messages .player-o-win').show(); gameEnded = true;}
 	if(turn >= 8 && winner == 0) 
 		{ $('#game-messages .draw').show(); gameEnded = true;}

 	
}



$('#reset-game').click(function(){

	playerSign = 'x';
	turn = 0;
	gameEnded = false;
	winner=0;
	matrix = [

	[0,0,0],
	[0,0,0],
	[0,0,0]
	];

	$('.field').text('');
	$('#game-messages .player-x-win').hide();
	$('#game-messages .player-o-win').hide();
	$('#game-messages .draw').hide();

	$('.container #game .field').removeClass('x');
	$('.container #game .field').removeClass('o');
});

});