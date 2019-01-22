let firstPlayer = 'X';
let secondPlayer = 'O';

let box01 = document.getElementById('box01');
let box02 = document.getElementById('box02');
let box03 = document.getElementById('box03');
let box04 = document.getElementById('box04');
let box05 = document.getElementById('box05');
let box06 = document.getElementById('box06');
let box07 = document.getElementById('box07');
let box08 = document.getElementById('box08');
let box09 = document.getElementById('box09');

box01.onclick = function(){
	if(box01.innerHTML == ''){	
	event.target.innerHTML = firstPlayer;
	switchTurn();
	gameWon();
	}
}

box02.onclick = function(){
	if(box02.innerHTML == ''){
	box02.innerHTML = firstPlayer;
	switchTurn();
	gameWon();
	}
}

box03.onclick = function(){
	if(box03.innerHTML == ''){
	box03.innerHTML = firstPlayer;
	switchTurn();
	gameWon();
	}
}

box04.onclick = function(){
	if(box04.innerHTML == ''){	
	box04.innerHTML = firstPlayer;
	switchTurn();
	gameWon();
	}
}

box05.onclick = function(){
	if(box05.innerHTML == ''){
	box05.innerHTML = firstPlayer;
	switchTurn();
	gameWon();
	}
}

box06.onclick = function(){
	if(box06.innerHTML == ''){
	box06.innerHTML = firstPlayer;
	switchTurn();
	gameWon();
	}
}

box07.onclick = function(){
	if(box07.innerHTML == ''){	
	box07.innerHTML = firstPlayer;
	switchTurn();
	gameWon();
	}
}

box08.onclick = function(){
	if(box08.innerHTML == ''){
	box08.innerHTML = firstPlayer;
	switchTurn();
	gameWon();
	}
}

box09.onclick = function(){
	if(box09.innerHTML == ''){
	box09.innerHTML = firstPlayer;
	switchTurn();
	gameWon();
	}
}

function switchTurn(){
	if(firstPlayer == 'X'){
		firstPlayer = 'O';
	}
	else{
		firstPlayer = 'X';
	}
}

function gameWon(){
	if(box01.innerHTML == 'X' && box02.innerHTML == 'X' && box03.innerHTML == 'X'){
		alert('Congratulation! You won!');
		location.reload();
	}
		else if(box04.innerHTML == 'X' && box05.innerHTML == 'X' && box06.innerHTML == 'X'){
			alert('Congratulation! You won!');
			location.reload();
		}
		else if(box07.innerHTML == 'X' && box08.innerHTML == 'X' && box09.innerHTML == 'X'){
			alert('Congratulation! You won!');
			location.reload();
		}
		else if(box01.innerHTML == 'X' && box04.innerHTML == 'X' && box07.innerHTML == 'X'){
			alert('Congratulation! You won!');
			location.reload();
		}
		else if(box02.innerHTML == 'X' && box05.innerHTML == 'X' && box08.innerHTML == 'X'){
			alert('Congratulation! You won!');
			location.reload();
		}
		else if(box03.innerHTML == 'X' && box06.innerHTML == 'X' && box09.innerHTML == 'X'){
			alert('Congratulation! You won!');
			location.reload();
		}
		else if(box01.innerHTML == 'X' && box05.innerHTML == 'X' && box09.innerHTML == 'X'){
			alert('Congratulation! You won!');
			location.reload();
		}
		else if(box03.innerHTML == 'X' && box05.innerHTML == 'X' && box07.innerHTML == 'X'){
			alert('Congratulation! You won!');
			location.reload();
		}

		else if(box01.innerHTML == 'O' && box02.innerHTML == 'O' && box03.innerHTML == 'O'){
			alert('You lose.');
			location.reload();
		}
		else if(box04.innerHTML == 'O' && box05.innerHTML == 'O' && box06.innerHTML == 'O'){
			alert('You lose.');
			location.reload();
		}
		else if(box07.innerHTML == 'O' && box08.innerHTML == 'O' && box09.innerHTML == 'O'){
			alert('You lose.');
			location.reload();
		}
		else if(box01.innerHTML == 'O' && box04.innerHTML == 'O' && box07.innerHTML == 'O'){
			alert('You lose.');
			location.reload();
		}
		else if(box02.innerHTML == 'O' && box05.innerHTML == 'O' && box08.innerHTML == 'O'){
			alert('You lose.');
			location.reload();
		}
		else if(box03.innerHTML == 'O' && box06.innerHTML == 'O' && box09.innerHTML == 'O'){
			alert('You lose.');
			location.reload();
		}
		else if(box01.innerHTML == 'O' && box05.innerHTML == 'O' && box09.innerHTML == 'O'){
			alert('You lose.');
			location.reload();
		}
		else if(box03.innerHTML == 'O' && box05.innerHTML == 'O' && box07.innerHTML == 'O'){
			alert('You lose.');
			location.reload();
		}
}