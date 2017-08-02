Space = function() {
	this.value = undefined;

	this.fillIn = function(move) {
		if(move === 'X' || move === 'O') { return this.value = move };
		throw 'This move is not allowed!'
	};
};

