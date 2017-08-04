Board = function(spaces) {
	this.spaces = spaces;

	this.isWin = function() {
		var line = spaces.slice(0,3).join()
		if(checkHorizontal(0,3) || checkHorizontal(3,6) || checkHorizontal(6,9)) { return true }
	};

	checkHorizontal = function(startLine, endLine) {
		var line = spaces.slice(startLine, endLine).join()
		if(line === 'X,X,X' || line === 'O,O,O') { return true };
	};
};
