Board = function(spaces) {
	this.spaces = spaces;

	this.isWin = function() {
		if(isHorizontalWin() || isVerticalWin() || isDiagonalWin()) { return true };
	};

	checkCombination = function(spaceOne, spaceTwo, spaceThree) {
		var line = `${spaces[spaceOne]},${spaces[spaceTwo]},${spaces[spaceThree]}`
		if(line === 'X,X,X' || line === 'O,O,O') { return true };
	};

	isHorizontalWin = function() {
		if(checkCombination(0,1,2) || checkCombination(3,4,5) || checkCombination(6,7,8)) { 
			return true 
		};
	};
	
	isVerticalWin = function() {
		if(checkCombination(0,3,6) || checkCombination(1,4,7) || checkCombination(2,5,8)) { 
			return true 
		};
	};

	isDiagonalWin = function() {
		if(checkCombination(0,4,8) || checkCombination(2,4,6)) { return true };
	};
};
