{
	let pScore = 0;
	let cScore = 0;

	function playGame(playerInput) {

		clearMessages();

		function getMoveName(argMoveId) {
			if (argMoveId == 1) {
				return 'kamień';
			}
			else if (argMoveId == 2) {
				return 'papier';
			}
			else if (argMoveId == 3) {
				return 'nożyce';
			}

			printMessage('Nie znam ruchu o id ' + argMoveId + '.');
			return 'nieznany ruch';
		}


		// ruch komputera

		const randomNumber = Math.floor(Math.random() * 3 + 1);

		console.log('Wylosowana liczba to: ' + randomNumber);

		const computerMove = getMoveName(randomNumber);


		printMessage('Mój ruch to: ' + computerMove);



		// ruch gracza

		const playerMove = getMoveName(playerInput);

		console.log('Gracz wybrał: ' + playerInput);

		printMessage('Twój ruch to: ' + playerMove);

		const updateScore = function () {
			const playerScore = document.querySelector(".player-score p")
			const computerScore = document.querySelector(".computer-score p")
			playerScore.innerHTML = pScore;
			computerScore.innerHTML = cScore;
			// const result = document.getElementById('result');
			// result.innerHTML = pScore + ' X ' + cScore;
		}

		// Wynik

		function displayResult(argComputerMove, argPlayerMove) {
			console.log('moves:', argComputerMove, argPlayerMove);

			if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
				printMessage('Ty wygrywasz!');
				pScore++;
				updateScore();
			}
			else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
				printMessage('Ty przegrywasz!');
				cScore++;
				updateScore();
			}
			else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
				printMessage('Remis!');
			}
			else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
				printMessage('nieznany ruch')
			}

			if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
				printMessage('Ty wygrywasz!');
				pScore++;
				updateScore();
			}
			else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
				printMessage('Ty przegrywasz!');
				cScore++;
				updateScore();
			}
			else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
				printMessage('Remis!');
			}
			else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
				printMessage('nieznany ruch')
			}

			if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
				printMessage('Ty wygrywasz!');
				pScore++;
				updateScore();
			}
			else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
				printMessage('Ty przegrywasz!');
				cScore++;
				updateScore();
			}
			else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
				printMessage('Remis!');
			}
			else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
				printMessage('nieznany ruch')
			}
		}


		displayResult(computerMove, playerMove);


	}
	document.getElementById('play-rock').addEventListener('click', function () {
		playGame(1);
	});

	document.getElementById('play-paper').addEventListener('click', function () {
		playGame(2);
	});

	document.getElementById('play-scissors').addEventListener('click', function () {
		playGame(3);
	});

}