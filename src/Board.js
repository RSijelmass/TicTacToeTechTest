Board = function(spaces) {
	this.spaces = spaces;

	this.isWin = function() {
		if(checkHorizontal(0,3) || checkHorizontal(3,6) || checkHorizontal(6,9)) { return true }
		if(checkVertical(0,3,6) || checkVertical(1,4,7) || checkVertical(2,5,8)) { return true };
		if(checkVertical(0,4,8) || checkVertical(2,4,6)) { return true };
	};

	checkHorizontal = function(startLine, endLine) {
		var line = spaces.slice(startLine, endLine).join()
		if(line === 'X,X,X' || line === 'O,O,O') { return true };
	};
	
	checkVertical = function(spaceOne, spaceTwo, spaceThree) {
		var line = `${spaces[spaceOne]},${spaces[spaceTwo]},${spaces[spaceThree]}`
		if(line === 'X,X,X' || line === 'O,O,O') { return true };
	};
};
