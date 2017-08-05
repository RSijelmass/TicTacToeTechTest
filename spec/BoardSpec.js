describe('Board', function() {
	var board;
	var emptySpaces = ['','','','','','','','','']
	beforeEach(function() {
		board = new Board(emptySpaces);
	});
	
	describe('initialization', function() {
		it('takes in 9 empty spaces', function() {
			expect(board.spaces).toEqual(emptySpaces)
		});
	});

	describe('checks for a horizontal win', function() {
		it('finds XXX win on first line', function() {
			var board = new Board(['X','X','X','','','','','',''])
			expect(board.isWin()).toEqual(true)
		});
		it('finds OOO win on first line', function() {
			var board = new Board(['O','O','O','','','','','',''])
			expect(board.isWin()).toEqual(true)
		});
		it('finds XXX win on second line', function() {
			var board = new Board(['','','','X','X','X','','',''])
			expect(board.isWin()).toEqual(true)
		});
		it('finds OOO win on second line', function() {
			var board = new Board(['','','','O','O','O','','',''])
			expect(board.isWin()).toEqual(true)
		});
		it('finds XXX win on third line', function() {
			var board = new Board(['','','','','','','X','X','X'])
			expect(board.isWin()).toEqual(true)
		});
		it('finds OOO win on second line', function() {
			var board = new Board(['','','','','','','O','O','O'])
			expect(board.isWin()).toEqual(true)
		});
	});

	describe('checks for a vertical win', function() {
		it('finds XXX win on first line', function() {
			var board = new Board(['X','','','X','','','X','',''])
			expect(board.isWin()).toEqual(true)
		});
		it('finds OOO win on first line', function() {
			var board = new Board(['O','','','O','','','O','',''])
			expect(board.isWin()).toEqual(true)
		});
		it('finds XXX win on second line', function() {
			var board = new Board(['','X','','','X','','','X',''])
			expect(board.isWin()).toEqual(true)
		});
		it('finds OOO win on second line', function() {
			var board = new Board(['','O','','','O','','','O',''])
			expect(board.isWin()).toEqual(true)
		});
		it('finds XXX win on third line', function() {
			var board = new Board(['','','X','','','X','','','X'])
			expect(board.isWin()).toEqual(true)
		});
		it('finds OOO win on third line', function() {
			var board = new Board(['','','O','','','O','','','O'])
			expect(board.isWin()).toEqual(true)
		});
	});
	describe('checks for a diagonal win', function() {
		it('finds XXX win from top left to lower right', function() {
			var board = new Board(['X','','','','X','','','','X'])
			expect(board.isWin()).toEqual(true)
		});
	});
});
