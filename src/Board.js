Board = function(spaces) {
	this.spaces = spaces;

	this.isWin = function() {
		var line = spaces.slice(0,3).join()
		if(line === 'X,X,X' || line === 'O,O,O') { 
			return true; 
		};
	};
}
