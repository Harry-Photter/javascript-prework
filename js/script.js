let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}

else if (randomNumber == 2) {
	printMessage('papier');
} 
else {
	printMessage('nożyce');
}
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == 1){
  playerMove = 'kamień';
}
else if (playerInput == 2) {
	printMessage('papier');
} 
else if {playerInput == 3
	printMessage('nożyce');
}

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Ty wygrywasz!');
  }

else if( computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage('Ty przegrywasz!');
}
  
else if { computerMove == 'kamień' && playerMove == 'kamień'
	printMessage('Remis!')	
}
