document.addEventListener('DOMContentLoaded', function() {

	chooseSpace = function(space, move) {
		document.getElementById(space).addEventListener('click', function() {
			console.log(`You chose ${move} at ${space}!`);
		});
	}

	document.getElementById('X').addEventListener('click', chooseSpace('1', 'X') );
	document.getElementById('O').addEventListener('click', chooseSpace('1', 'O') );

});
