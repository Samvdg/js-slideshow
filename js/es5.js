// --------------------------------------ES 5--------------------------------------

'use strict';

var images = document.getElementsByClassName('img');
var index = 1;
var pauze = true;


window.onload = document.getElementById('1').style.opacity = '1';
window.onload = function(){setInterval(plusF, 3015)};

function stop(){
	pauze = false;
}

function starten(){
	pauze = true;
}

function min(){
	if (index === 1) {
		none(index);
		index = images.length;
		block(index);
	} else {
		none(index);
		index--;
		block(index);
	}
}

function plus() {
	if (index === images.length) {
		index = 1;
		none(images.length);
		block(index);
	} else {
		none(index);
		index++;
		block(index);
	}
}


function plusF() {
	if (pauze === true) {
		plus()
	}
}


function none(id){
	document.getElementById(id).style.opacity = '0';
	setTimeout(function(){document.getElementById(id).style.display = 'none';}, 1000);
}

function block(id){
	setTimeout(function(){document.getElementById(id).style.display = 'block';}, 1000);
	setTimeout(function(){document.getElementById(id).style.opacity = '1';},1010);
}

document.onkeydown = function(event) {
	switch (event.keyCode) {
		case 37:
			min();
			break;

		case 39:
			plus();
			break;
	}
};

