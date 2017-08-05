document.addEventListener('DOMContentLoaded', function() {

	var currentMove = 'X';
	var nextMove = 'O';

	function chooseSpace(space)  {
		document.getElementById(space).addEventListener('click', function() {
			document.getElementById(space).innerHTML = currentMove
			swapMove();
		});
	}

	for(var i=1; i<10; i++) {
		document.getElementById(i.toString()).addEventListener('click', chooseSpace(i.toString()));
	}

	function swapMove() {
		currentMove = [nextMove, nextMove = currentMove][0];
	};

	});
