Board = function(spaces) {
	this.spaces = spaces;
	const SPACE_COMBINATIONS = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

	this.isWin = function() {
	//	SPACE_COMBINATIONS.forEach(function(combination) {
	//		if(checkCombination(combination[0],combination[1],combination[2]) === true) {
	//			return true;
	//		};
	//	});
		if(isHorizontalWin() || isVerticalWin() || isDiagonalWin()) { return true };
		return false;
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
