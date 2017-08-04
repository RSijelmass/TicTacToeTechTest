describe('Board', function() {
	var board;
	var emptySpaces = ['','','','','','','','','']
	beforeEach(function() {
		board = new Board();
	});
	
	describe('initialization', function() {
		it('takes in 9 empty spaces', function() {
			expect(board.spaces).toEqual(emptySpaces)
		});
	});
});
