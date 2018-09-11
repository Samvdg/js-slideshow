//------------------------------------------------------ES 6--------------------------------------------
'use strict';

const images = document.getElementsByClassName('img');
let index = 1;
let pauze = true;


window.onload = () => {setInterval(plusF, 3010)};

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
	setTimeout(() => {document.getElementById(id).style.display = 'none';}, 1000);}

function block(id){
	setTimeout(() => {document.getElementById(id).style.display = 'block';}, 1000);
	setTimeout(() => {document.getElementById(id).style.opacity = '1';}, 1010);}

document.onkeydown = event => {
	switch (event.keyCode) {
		case 37:
			min();
			break;

		case 39:
			plus();
			break;
	}
};