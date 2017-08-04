Board = function(spaces) {
	this.spaces = spaces;

	this.isWin = function() {
		if(spaces.slice(0,3).join() === 'X,X,X') { 
			return true; 
		};
	};
}
