var field = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
var picsOpened = [];
var picsClosedCount = field.length;

$(document).ready(function() {
	shuffle(field);

$('#reset-game').click(function(){
	resetGame();

	var i = 1;
	$('#container .image > img').each(function(){
		$(this).attr('src','images/back/' + i + '.jpeg');
		i++;
	});

	shuffle(field);	
});

var prevImg = 0;
var nextImg = 0;
$('#container .image').click(function(){
	var  i=1;
	if(i>2)
	{
	$("#container .image").removeClass("modify");
		i=1;
	}
	$(this).addClass('modify');
    setModifAttr(this);
    var c = $(this).data('state');
	var a = $(this).attr('id');
	a = a - 1;

	var imageName = field[a];

	$(this).children(":first").attr('src','images/pairs/' + imageName + '.jpg');
	picsOpened.push(field[a]);
	
	
	if(picsOpened.length==1){
		prevImg = field[a];
	}
	if(picsOpened.length == 2){
		if(picsOpened[0] != picsOpened[1])
		{
			prevImg = picsOpened[0];
		nextImg=picsOpened[1];
		setTimeout(function() {
		$(this).children(":first").attr('src','images/pairs/' + nextImg + '.jpg');
	  	 twoDifferent(prevImg,nextImg);
	  	    }, 1000);
		}
		else
		{
			$("#container .image").removeClass('modify');
			//removeClass
			var attrSetPrev =picsOpened[0];
			var attrSetNext = picsOpened[1];
			nextImg=picsOpened[1];
			//twoSame(attrSetPrev,attrSetNext);
			setAttr(this);
			picsClosedCount-=2;
			var prevImg = 0;
			var nextImg = 0;
		i=i+2;
  		(picsClosedCount == 0) ? alert('You win!') : picsOpened=[];

		}
		
	}

});
});

function twoDifferent(prevImg,nextImg){
if(prevImg != nextImg){
	$('#container').find(".modify").each(function(){
	if($(this).data('state') != 'opened'){
		$(this).removeClass('modify');
    var id = $(this).attr('id');

	$(this).children(":first").attr('src','images/back/' + id + '.jpeg');
	setClosed(this);
 	 }
 });

}
picsOpened=[];
var prevImg = 0;
var nextImg = 0;
}

function setModifAttr(b){
	b.setAttribute('data-state','modifyed');
}


function setClosed(b){
	b.setAttribute('data-state','closed');
}

function setAttr(a){
	a.setAttribute('data-state','opened');
	a.classList.remove('modify');
}

function resetGame(){
	picsClosedCount = 0;
	attrSetPrev =0;
	attrSetNext = 0;
	picsOpened=[];	
	prevImg = 0;
	nextImg = 0;
 	var elementArray;

    elementArray = document.getElementsByClassName("image");

    for(var i = 0; i < elementArray.length; i++)
    {
        elementArray[i].setAttribute("data-state", "closed");
    }

    shuffle(field);   
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex)
  {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
