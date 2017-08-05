document.addEventListener('DOMContentLoaded', function() {

	var currentMove = 'X'

	function chooseSpace(space)  {
		document.getElementById(space).addEventListener('click', function() {
			document.getElementById(space).innerHTML = currentMove
			if(currentMove === 'X') {
				currentMove = 'O' 
			} else {
				currentMove = 'X'
			};
		});
	}


	document.getElementById('1').addEventListener('click', chooseSpace('1'));
	document.getElementById('2').addEventListener('click', chooseSpace('2'));
	document.getElementById('3').addEventListener('click', chooseSpace('3'));
	document.getElementById('4').addEventListener('click', chooseSpace('4'));
	document.getElementById('5').addEventListener('click', chooseSpace('5'));
	document.getElementById('6').addEventListener('click', chooseSpace('6'));
	document.getElementById('7').addEventListener('click', chooseSpace('7'));
	document.getElementById('8').addEventListener('click', chooseSpace('8'));
	document.getElementById('9').addEventListener('click', chooseSpace('9'));

});
